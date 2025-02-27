import React, { useState, useContext } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthenticationContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const AddMarathon = () => {
  const { currentUser } = useContext(AuthenticationContext);

  const [formData, setFormData] = useState({
    email: currentUser?.email || "",
    title: "",
    startRegistrationDate: null,
    endRegistrationDate: null,
    startDate: null,
    location: "",
    runningDistance: "",
    description: "",
    image: "",
    totalRegistrationCount: 0,
    createdAt: new Date(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle date changes
  const handleDateChange = (date, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: date,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await axios.post(
        // `${import.meta.env.VITE_BACKEND_URL}/allMarathon`,
        `https://marathonx-server.vercel.app/allMarathon`,
        updatedFormData,
        { withCredentials: true }
      );
      console.log("Marathon data saved:", response.data);
      toast.success("Marathon added successfully!");
    } catch (error) {
      console.error("Error saving marathon data:", error);
      toast.error("Error saving marathon data!");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <Helmet>
        <title>Add marathom</title>
      </Helmet>
      <h2 className="text-3xl font-bold mb-6">Add Marathon</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div>
          <label className="block text-xl mb-2">User Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            readOnly
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Marathon Title */}
        <div>
          <label className="block text-xl mb-2">Marathon Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Start Registration Date */}
        <div>
          <label className="block text-xl mb-2">Start Registration Date</label>
          <DatePicker
            selected={formData.startRegistrationDate}
            onChange={(date) => handleDateChange(date, "startRegistrationDate")}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* End Registration Date */}
        <div>
          <label className="block text-xl mb-2">End Registration Date</label>
          <DatePicker
            selected={formData.endRegistrationDate}
            onChange={(date) => handleDateChange(date, "endRegistrationDate")}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Marathon Start Date */}
        <div>
          <label className="block text-xl mb-2">Marathon Start Date</label>
          <DatePicker
            selected={formData.startDate}
            onChange={(date) => handleDateChange(date, "startDate")}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-xl mb-2">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-xl mb-2">Created Time</label>
          <input
            type="text"
            id="createdAt"
            name="createdAt"
            readOnly
            value={formData.createdAt}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Running Distance */}
        <div>
          <label className="block text-xl mb-2">Running Distance</label>
          <select
            id="runningDistance"
            name="runningDistance"
            value={formData.runningDistance}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          >
            <option value="25k">25k</option>
            <option value="10k">10k</option>
            <option value="3k">3k</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-xl mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Marathon Image */}
        <div>
          <label className="block text-xl mb-2">Marathon Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-xl mb-2">Total Registration Count</label>
          <input
            type="text"
            id="count"
            name=" totalRegistrationCount"
            value={formData.totalRegistrationCount}
            readOnly
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full p-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add Marathon
          </button>
        </div>
      </form>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default AddMarathon;
