import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-gray-800 text-white py-16">
      <div className="container justify-center items-center mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex flex-col items-center mb-4">
              <img
                src={logo}
                alt="MarathonX Logo"
                className="w-16 h-16 mb-2 md:mb-0 md:mr-3"
              />
              <a className="text-white font-extrabold text-2xl md:text-3xl hover:text-red-500 transition duration-300">
                <span className="text-red-500">MarathonX</span>
              </a>
            </div>

            <p className="text-sm md:text-base text-gray-300">
              Your ultimate Marathon Management Partner.
            </p>
          </div>

          {/* Useful Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">
              Useful Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-red-500 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="text-gray-300 hover:text-red-500 transition duration-300"
                >
                  Upcoming Races
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-red-500 transition duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-300 hover:text-red-500 transition duration-300"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-red-500 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">
              Stay Updated
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest race updates and news.
            </p>
            <form className="flex justify-center md:justify-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg text-gray-800 focus:outline-none"
              />
              <button className="bg-red-500 text-white px-6 py-2 rounded-r-lg hover:bg-red-600 transition duration-300">
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media */}

          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-600 text-3xl transition duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 text-3xl transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-600 text-3xl transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-700 text-3xl transition duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2024 MarathonX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
