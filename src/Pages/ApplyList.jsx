import React, { useState, useEffect, useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthenticationContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet';
import useSecureAxios from '../Hook/useSecureAxios';
import Swal from 'sweetalert2'; 
const ApplyList = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [registrations, setRegistrations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { currentUser } = useContext(AuthenticationContext);
  const currentUserEmail = currentUser ? currentUser.email : '';
  const [modalVisible, setModalVisible] = useState(false);
  const [currentRegistration, setCurrentRegistration] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    additionalInfo: '',
  });

  const axiosInstance = useSecureAxios(); 
  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const url = searchQuery
          ? `${BACKEND_URL}/regMarathon/user/${currentUserEmail}?search=${searchQuery}`
          : `${BACKEND_URL}/regMarathon/user/${currentUserEmail}`;
        const { data } = await axiosInstance.get(url); // Use axiosInstance here
        setRegistrations(data);
      } catch (error) {
        toast.error('Failed to fetch registrations');
      }
    };

    fetchRegistrations();
  }, [currentUserEmail, searchQuery, axiosInstance]);


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`${BACKEND_URL}/updateRegistration`, {
        registrationId: currentRegistration._id,
        ...formData,
      });
      toast.success('Registration updated successfully');
      setModalVisible(false);
      const { data } = await axiosInstance.get(`${BACKEND_URL}/regMarathon/user/${currentUserEmail}`);
      setRegistrations(data);
    } catch (error) {
      toast.error('Failed to update registration');
    }
  };

 
  const handleDelete = async (registrationId) => {
    
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this registration? This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosInstance.delete(`${BACKEND_URL}/deleteRegistration`, {
            data: { registrationId },
          });
          toast.success('Registration deleted successfully');
          const { data } = await axiosInstance.get(`${BACKEND_URL}/regMarathon/user/${currentUserEmail}`);
          setRegistrations(data);
        } catch (error) {
          toast.error('Failed to delete registration');
        }
      }
    });
  };
  

  
  const showUpdateModal = (registration) => {
    setCurrentRegistration(registration);
    setFormData({
      firstName: registration.firstName,
      lastName: registration.lastName,
      contactNumber: registration.contactNumber,
      additionalInfo: registration.additionalInfo,
    });
    setModalVisible(true);
  };

  // Handle closing the modal
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="container mx-auto p-4 max-w-screen-lg">
      <Helmet>
        <title>MyapplyList</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">My Marathon Registrations</h1>

      <div className="mb-4 flex flex-col sm:flex-row">
        <input
          type="text"
          placeholder="Search by Marathon Title"
          value={searchQuery}
          onChange={handleSearchChange}
          className="border p-2 w-full sm:w-3/4 mb-2 sm:mb-0"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded sm:ml-2">Search</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Marathon Title</th>
              <th className="border px-4 py-2">Start Date</th>
              <th className="border px-4 py-2">Registration Date</th>
              <th className="border px-4 py-2">First Name</th>
              <th className="border px-4 py-2">Last Name</th>
              <th className="border px-4 py-2">Contact Number</th>
              <th className="border px-4 py-2">Additional Info</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((registration) => (
              <tr key={registration._id}>
                <td className="border px-4 py-2">{registration.title}</td>
                <td className="border px-4 py-2">
                  {new Date(registration.startDate).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2">
                  {new Date(registration.registrationDate).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2">{registration.firstName}</td>
                <td className="border px-4 py-2">{registration.lastName}</td>
                <td className="border px-4 py-2">{registration.contactNumber}</td>
                <td className="border px-4 py-2">{registration.additionalInfo}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => showUpdateModal(registration)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(registration._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalVisible && (
  <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded-lg w-full sm:w-1/3">
      <h2 className="text-xl font-semibold mb-4">Update Registration</h2>
      <form onSubmit={handleUpdate}>
        {/* Marathon Title */}
        <div className="mb-4">
          <label htmlFor="marathonTitle" className="block">Marathon Title</label>
          <p className="border p-2 w-full">{currentRegistration.title}</p>
        </div>

        {/* Marathon Start Date */}
        <div className="mb-4">
          <label htmlFor="startDate" className="block">Start Date</label>
          <p className="border p-2 w-full">{new Date(currentRegistration.startDate).toLocaleDateString()}</p>
        </div>

     
        <div className="mb-4">
          <label htmlFor="firstName" className="block">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contactNumber" className="block">Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="additionalInfo" className="block">Additional Info</label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Update
        </button>
        <button
          type="button"
          onClick={closeModal}
          className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
        >
          Close
        </button>
      </form>
    </div>
  </div>
)}

      <ToastContainer />
    </div>
  );
};

export default ApplyList;
