import React, { useContext, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import google from "../assets/ggogle.png";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthenticationContext } from "../Provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const Loginpage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, googleSignIn, setCurrentUser } = useContext(
    AuthenticationContext
  );
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // For testing the toast notification on initial render
  useEffect(() => {
    toast.success("Page Loaded Successfully!");
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/");
      toast.success("Google Sign-In Successful!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await loginUser(email, password);
      setCurrentUser(result.user);
      form.reset();

      // Show success toast
      toast.success("Login successful! Redirecting...");

      // Delay navigation to ensure toast shows
      setTimeout(() => {
        navigate("/");
      }, 1000); // 1 second delay for toast to show
    } catch (err) {
      console.error("Login error:", err);
      setError(err.code); // Set the error code directly
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div>
      <Helmet>
        <title>LoginPage</title>
      </Helmet>

      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                className="mt-2 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <button
                type="button"
                className="absolute bg-transparent border-none right-4 top-10"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="text-right text-sm text-blue-500 hover:underline">
              Forgot Password?
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium"
            >
              Login
            </button>
          </form>

          {error && (
            <div className="mt-4 text-red-500 text-sm">
              <p>
                {error === "auth/user-not-found"
                  ? "User not found. Please register."
                  : "Invalid credentials, please try again."}
              </p>
            </div>
          )}

          <div className="my-6 flex items-center">
            <hr className="flex-grow border-gray-300" />
            <span className="px-4 text-gray-500 text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button
            className="w-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-medium"
            onClick={handleGoogleSignIn}
          >
            <img src={google} alt="Google" className="w-5 h-5 mr-2" />
            Continue with Google
          </button>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link
              to="/reg"
              className="text-blue-500 hover:underline font-medium"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Loginpage;
