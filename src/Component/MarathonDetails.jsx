import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Helmet } from 'react-helmet';

const MarathonDetails = () => {
    const { id } = useParams(); 
    const [marathon, setMarathon] = useState(null);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate(); 
    const [toastMessage, setToastMessage] = useState('');

    useEffect(() => {
       
        axios.get(`${backendUrl}/allMarathon/${id}`,{withCredentials:true})
            .then((response) => {
                setMarathon(response.data);
            })
            .catch((error) => {
                console.error('Error fetching marathon details:', error);
            });
    }, [id]);

    const handleRegisterClick = () => {
        const currentDate = new Date();
        const startDate = new Date(marathon.startRegistrationDate);
        const endDate = new Date(marathon.endRegistrationDate);

        if (currentDate >= startDate && currentDate <= endDate) {
         
            navigate(`/register/${marathon._id}`);
        } else {
            
            setToastMessage('Registration is currently closed.');
            setTimeout(() => setToastMessage(''), 3000); // 
        }
    };

    if (!marathon) {
        return <Loading />;
    }

    const startDate = new Date(marathon.startDate);
    const remainingTime = startDate - new Date();

    return (
       <section className='mt-20'>
         <div className="container md:w-7/12 w-full mx-auto p-6">
            <Helmet><title>MarathonsDetails</title></Helmet>
            {toastMessage && (
                <div className="fixed top-5 right-5 bg-red-600 text-white px-4 py-2 rounded">
                    {toastMessage}
                </div>
            )}
          <div className=''>
          <div>
           <h1 className="text-4xl font-bold mb-4">{marathon.title}</h1>
            <img src={marathon.image} alt={marathon.title} className="w-full h-96 rounded-lg mb-6" />
            <p className="text-gray-700 text-lg mb-4">{marathon.description}</p>
            <p className="text-gray-600">
                <span className="font-semibold">Location:</span> {marathon.location}
            </p>
            <p className="text-gray-600">
                <span className="font-semibold">Start Registration:</span> {new Date(marathon.startRegistrationDate).toLocaleDateString()}
            </p>
            <p className="text-gray-600">
                <span className="font-semibold">End Registration:</span> {new Date(marathon.endRegistrationDate).toLocaleDateString()}
            </p>
            <p className="text-gray-600">
                <span className="font-semibold">Start Date:</span> {new Date(marathon.startDate).toLocaleDateString()}
            </p>
            <p className="text-gray-600">
                <span className="font-semibold">Running Distance:</span> {marathon.runningDistance}
            </p>
            <p className="text-gray-600">
                <span className="font-semibold">Total Registrations:</span> {marathon.totalRegistrationCount}
            </p>
           </div>

            {/* Countdown Timer */}
            <div className="my-6  ">
                <h2 className="text-xl font-semibold mb-4">Countdown to Marathon Start</h2>
                <CountdownCircleTimer
                    isPlaying
                    duration={remainingTime / 1000} 
                    colors="#4e9af1"
                    strokeWidth={6}
                    size={150}
                    onComplete={() => ({ shouldRepeat: false })}
                >
                    {({ remainingTime }) => {
                        const days = Math.floor(remainingTime / (3600 * 24));
                        const hours = Math.floor((remainingTime % (3600 * 24)) / 3600);
                        const minutes = Math.floor((remainingTime % 3600) / 60);
                        return (
                            <div>
                                <div className="text-lg">{`${days}d ${hours}h 
                                 ${minutes}m`}</div>
                            </div>
                        );
                    }}
                </CountdownCircleTimer>
            </div>
          </div>

            <button
                onClick={handleRegisterClick}
                className={`mt-6 px-6 py-2 rounded text-white ${new Date() >= new Date(marathon.startRegistrationDate) && new Date() <= new Date(marathon.endRegistrationDate) ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'}`}
                disabled={!(new Date() >= new Date(marathon.startRegistrationDate) && new Date() <= new Date(marathon.endRegistrationDate))}
            >
                Register
            </button>
        </div>
       </section>
    );
};

export default MarathonDetails;
