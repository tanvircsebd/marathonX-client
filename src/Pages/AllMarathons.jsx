import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import useSecureAxios from '../Hook/useSecureAxios';


const AllMarathons = () => {
    const [marathons, setMarathons] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc'); 
    const navigate = useNavigate();
    const axiosSecure = useSecureAxios();

    useEffect(() => {
        
        axiosSecure
            .get(`/allMarathon?sortOrder=${sortOrder}`)
            .then((response) => {
                setMarathons(response.data);
            })
            .catch((error) => {
                console.error('Error fetching marathons:', error);
            });
    }, [sortOrder, axiosSecure]); 

    const handleSeeDetails = (marathonId) => {
        navigate(`/marathon/${marathonId}`);
    };

    return (
        <section className='mt-20'>
            <div className="container mx-auto p-4">
            <Helmet>
                <title>All Marathons</title>
            </Helmet>

            <h2 className="text-3xl font-bold text-center mb-6">Explore Ongoing Marathons</h2>

            {/* Sorting Dropdown */}
            <div className="mb-4 text-center">
                <label htmlFor="sortOrder" className="mr-2">
                    Sort By:
                </label>
                <select
                    id="sortOrder"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="px-4 py-2 border rounded"
                >
                    <option value="asc">Oldest to Newest</option>
                    <option value="desc">Newest to Oldest</option>
                </select>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                {marathons.map((marathon) => (
                    <div key={marathon._id} className="border rounded-lg p-4 shadow-lg">
                        <img
                            src={marathon.image}
                            alt={marathon.title}
                            className="w-full h-80 rounded-t-lg"
                        />
                        <div className="mt-4">
                            <h3 className="text-xl font-bold">{marathon.title}</h3>
                            <p className="text-gray-700">{marathon.description}</p>
                            <p className="text-gray-600 mt-2">
                                <span className="font-semibold">Location:</span> {marathon.location}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-semibold">Start Registration:</span>{' '}
                                {new Date(marathon.startRegistrationDate).toLocaleDateString()}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-semibold">End Registration:</span>{' '}
                                {new Date(marathon.endRegistrationDate).toLocaleDateString()}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-semibold">Start Date:</span>{' '}
                                {new Date(marathon.startDate).toLocaleDateString()}
                            </p>
                            <button
                                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                onClick={() => handleSeeDetails(marathon._id)}
                            >
                                See Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
};

export default AllMarathons;
