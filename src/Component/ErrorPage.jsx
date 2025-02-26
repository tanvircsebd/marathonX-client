import React from 'react';
import error from '../assets/not foundfund.png'
import { Navigate, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate(); 
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <img
                src={error}
                alt="Error Illustration"
                className="mb-6 w-64 h-auto"
            />
            <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h1>
            <p className="text-lg text-gray-700 text-center">
                'An unexpected error occurred. Please try again later.'
            </p>
            <button
                onClick={() => navigate('/')}
                className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
            >
                Refresh Page
            </button>
        </div>
    );
};

export default ErrorPage;
