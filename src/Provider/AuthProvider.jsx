import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import app from "../Firebase/firebase.config";
import axios from "axios";

// Create Auth Context
export const AuthenticationContext = createContext();
const firebaseAuth = getAuth(app);

const AuthenticationProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const registerUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const logoutUser = () => {
    setIsLoading(true);
    return signOut(firebaseAuth);
  };

  const loginUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const updateUserData = (updateData) => {
    return updateProfile(firebaseAuth.currentUser, updateData);
  };

  const googleAuthProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    setIsLoading(true);
    signInWithPopup(firebaseAuth, googleAuthProvider)
      .then((result) => {
        setCurrentUser(result.user);
        // toast.success("Signed up with Google successfully!");
      })
      .catch((error) => {
        // toast.error("Google Sign-In failed");
      });
  };

  const updateProfileInfo = async (profileData) => {
    if (!firebaseAuth.currentUser) {
      throw new Error("No user is currently logged in!");
    }

    try {
      await updateProfile(firebaseAuth.currentUser, {
        displayName:
          profileData.displayName || firebaseAuth.currentUser.displayName,
        photoURL: profileData.photoURL || firebaseAuth.currentUser.photoURL,
      });

      setCurrentUser({
        ...firebaseAuth.currentUser,
        displayName:
          profileData.displayName || firebaseAuth.currentUser.displayName,
        photoURL: profileData.photoURL || firebaseAuth.currentUser.photoURL,
      });

      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile.");
      throw error;
    }
  };

  const authContextValue = {
    currentUser,
    setCurrentUser,
    registerUser,
    isLoading,
    logoutUser,
    updateUserData,
    loginUser,
    googleSignIn,
    updateProfileInfo,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setCurrentUser(user);
      if (user?.email) {
        const currentUser = { email: user.email };
        axios
          .post("https://marathonx-server.vercel.app/jwt", currentUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("login", res.data);
            setIsLoading(false);
          })
          .catch((err) => {
            console.error(err);
            setIsLoading(false);
          });
      } else {
        axios
          .post(
            "https://marathonx-server.vercel.app/logout",
            {},
            { withCredentials: true }
          )
          .then((res) => {
            console.log("logout", res.data);
            setIsLoading(false);
          })
          .catch((err) => {
            console.error(err);
            setIsLoading(false);
          });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthenticationContext.Provider value={authContextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
