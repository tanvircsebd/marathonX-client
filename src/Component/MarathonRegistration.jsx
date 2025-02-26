import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthenticationContext } from '../Provider/AuthProvider';
import Loading from './Loading';
import { Helmet } from 'react-helmet';

const MarathonRegister = () => {
  const { id } = useParams(); 
  const { currentUser } = useContext(AuthenticationContext); 
  const [marathon, setMarathon] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    additionalInfo: '',
  });
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
  
    axios
      .get(`${backendUrl}/allMarathon/${id}`,{withCredentials:true})
      .then((response) => {
        console.log('Fetched marathon:', response.data); 
        setMarathon(response.data);
      })
      .catch((error) => {
        console.error('Error fetching marathon details:', error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

   
    if (!marathon || !marathon.title) {
      setToastMessage('Marathon title is missing.');
      return;
    }

    const registrationData = {
      marathonId: id,
      email: currentUser.email, // Auto-filled
      title: marathon.title, // Ensure title is passed correctly
      startDate: marathon.startDate, // Read-only
      ...formData, // User-entered data
    };

    // Simplified registration process with a single API call
    axios
      .post(`${backendUrl}/registerMarathon`, registrationData)
      .then(() => {
        setToastMessage('Registration successful!');
        setTimeout(() => navigate('/dashboard/my-apply-list'), 3000); // Redirect after 3 seconds
      })
      .catch((error) => {
        console.error('Error during registration:', error);
        setToastMessage('Error during registration.');
      });
  };

  if (!marathon) {
    return <Loading></Loading>;
  }

  return (
    <div className="container mx-auto p-6 md:w-6/12 mt-20">
      <Helmet><title>MarathonsRegister</title></Helmet>
      {toastMessage && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded">
          {toastMessage}
        </div>
      )}
      <h1 className="text-3xl font-bold mb-6">Register for {marathon.title}</h1>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        {/* Email (Read-only) */}
        <div>
          <label className="block font-semibold text-gray-700">Email</label>
          <input
            type="email"
            value={currentUser.email}
            readOnly
            className="w-full px-4 py-2 border rounded bg-gray-100"
          />
        </div>

        {/* Marathon Title (Read-only) */}
        <div>
          <label className="block font-semibold text-gray-700">Marathon Title</label>
          <input
            type="text"
            value={marathon.title}
            readOnly
            className="w-full px-4 py-2 border rounded bg-gray-100"
          />
        </div>

        {/* Start Date (Read-only) */}
        <div>
          <label className="block font-semibold text-gray-700">Start Date</label>
          <input
            type="text"
            value={new Date(marathon.startDate).toLocaleDateString()}
            readOnly
            className="w-full px-4 py-2 border rounded bg-gray-100"
          />
        </div>

        {/* First Name */}
        <div>
          <label className="block font-semibold text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block font-semibold text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block font-semibold text-gray-700">Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        {/* Additional Info */}
        <div>
          <label className="block font-semibold text-gray-700">Additional Info</label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Submit Registration
        </button>
      </form>
    </div>
  );
};

export default MarathonRegister;
