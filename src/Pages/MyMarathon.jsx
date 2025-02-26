import React, { useEffect, useState, useContext } from 'react';
import { AuthenticationContext } from '../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify'; 
import { Helmet } from 'react-helmet';
import 'react-toastify/dist/ReactToastify.css';
import useSecureAxios from '../Hook/useSecureAxios';

const MyMarathon = () => {
  const { currentUser } = useContext(AuthenticationContext);
  const secureAxios = useSecureAxios(); 
  const [marathons, setMarathons] = useState([]);
  const [selectedMarathon, setSelectedMarathon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    startDate: '',
    startRegistrationDate: '',
    endRegistrationDate: ''
  });

  useEffect(() => {
    const fetchMarathons = async () => {
      try {
        const response = await secureAxios.get(`/allMarathon/user/${currentUser.email}`);
        setMarathons(response.data);
      } catch (error) {
        console.error('Error fetching marathons:', error);
      }
    };
    fetchMarathons();
  }, [secureAxios, currentUser.email]);

  const handleUpdate = (marathon) => {
    setSelectedMarathon(marathon);
    setFormData({
      title: marathon.title,
      location: marathon.location,
      startDate: new Date(marathon.startDate).toISOString().split('T')[0],
      startRegistrationDate: new Date(marathon.startRegistrationDate).toISOString().split('T')[0],
      endRegistrationDate: new Date(marathon.endRegistrationDate).toISOString().split('T')[0]
    });
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await secureAxios.patch(`/marathon/${selectedMarathon._id}`, formData);
      setMarathons(marathons.map((marathon) =>
        marathon._id === selectedMarathon._id ? { ...marathon, ...formData } : marathon
      ));
      setIsModalOpen(false);
      toast.success('Marathon updated successfully!');
    } catch (error) {
      console.error('Error updating marathon:', error);
      toast.error('Failed to update marathon. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await secureAxios.delete(`/marathon/${id}`);
      setMarathons(marathons.filter((marathon) => marathon._id !== id));
      toast.success('Marathon deleted successfully!');
    } catch (error) {
      console.error('Error deleting marathon:', error);
      toast.error('Failed to delete marathon. Please try again.');
    }
  };

  return (
<div className="p-6">
  <Helmet>
    <title>MyMarathonsList</title>
  </Helmet>

  <h1 className="text-2xl font-bold mb-4 text-center md:text-left">My Marathons</h1>

  <div className="overflow-x-auto">
    <div className="inline-block min-w-full align-middle">
      <table className="min-w-full table-auto border-separate border-spacing-2">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Start Date</th>
            <th className="px-4 py-2">Registration Dates</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {marathons.map((marathon) => (
            <tr key={marathon._id} className="border-b hover:bg-gray-100">
              <td className="md:px-4 md:py-2">{marathon.title}</td>
              <td className="md:px-4 md:py-2">{marathon.location}</td>
              <td className="px-4 py-2">{new Date(marathon.startDate).toLocaleDateString()}</td>
              <td className="px-4 py-2">
                {new Date(marathon.startRegistrationDate).toLocaleDateString()} -{' '}
                {new Date(marathon.endRegistrationDate).toLocaleDateString()}
              </td>
              <td className="px-4 py-2">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                  onClick={() => handleUpdate(marathon)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                  onClick={() => handleDelete(marathon._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  {isModalOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-11/12 sm:w-96">
        <h2 className="text-xl font-semibold mb-4">Update Marathon</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Registration Dates</label>
            <input
              type="date"
              name="startRegistrationDate"
              value={formData.startRegistrationDate}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            <input
              type="date"
              name="endRegistrationDate"
              value={formData.endRegistrationDate}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md mt-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  )}

  <ToastContainer />
</div>

  );
};

export default MyMarathon;
