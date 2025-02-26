import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-16 ">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Contact Us
      </h1>

      <p className="text-lg text-center text-gray-700 mb-8">
        Have questions or need assistance? Reach out to us, and we’ll be happy
        to help!
      </p>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">
              Your Name
            </label>
            <input
              type="text"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">
              Your Email
            </label>
            <input
              type="email"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea
              rows="4"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <Link to="/">
            {" "}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </Link>
        </form>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-xl font-bold text-gray-800">
          Our Contact Information
        </h2>
        <p className="text-gray-700 mt-2">
          📍 123 Marathon Street, Runner City, USA
        </p>
        <p className="text-gray-700">📧 support@MarathonX.com</p>
        <p className="text-gray-700">📞 +1 234 567 890</p>
      </div>
    </div>
  );
};

export default ContactUs;
