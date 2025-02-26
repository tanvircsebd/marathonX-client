import React, { useContext, useState } from "react";
import googleLogo from "../assets/ggogle.png";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthenticationContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2"; // Import SweetAlert2
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";

const RegisterPage = () => {
  const { registerUser, setCurrentUser, updateUserData, googleSignIn } =
    useContext(AuthenticationContext);
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn();
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Check for valid name length
    if (name.length < 5) {
      setError({ name: "Name must be at least 5 characters long" });
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Name must be at least 5 characters",
      });
      return;
    }

    // Check for empty fields
    if (!email || !photo || !password) {
      setError({ general: "All fields are required" });
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required",
      });
      return;
    }

    // Validate password format
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasValidLength = password.length >= 6;

    if (!hasUppercase || !hasLowercase || !hasValidLength) {
      setError({
        password:
          "Password must have at least 6 characters, an uppercase letter, and a lowercase letter",
      });
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid password format",
      });
      return;
    }

    // Register the user
    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        setCurrentUser(user);
        updateUserData({ displayName: name, photoURL: photo })
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Success!",
              text: "User successfully registered!",
            });
            navigate("/");
          })
          .catch((err) => {
            console.error("Error updating profile:", err);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Error updating profile",
            });
          });
      })
      .catch((err) => {
        console.error("Error creating user:", err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Error creating user: ${err.message}`,
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>Registation</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Create an account to get started
          </h2>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                Photo URL
              </label>
              <input
                type="text"
                id="photo"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter photo URL"
                required
              />
            </div>

            <div className="mt-4 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                className="mt-2 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#2d524b] focus:outline-none"
              />
              <button
                type="button"
                className="absolute bg-transparent border-none right-4 top-10"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-5 rounded-md font-semibold"
            >
              Register
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-sm text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md font-semibold"
            onClick={handleGoogleSignIn}
          >
            <img src={googleLogo} alt="Google" className="w-5 h-5 mr-2" />
            Continue with Google
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
