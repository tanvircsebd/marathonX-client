import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MarathonCardList = () => {
  const [marathons, setMarathons] = useState([]);

  useEffect(() => {
    const fetchMarathons = async () => {
      try {
        const response = await axios.get(
          // `${import.meta.env.VITE_BACKEND_URL}/allMarathonlimit`
          `https://marathonx-server.vercel.app/allMarathonlimit`
        );
        setMarathons(response.data);
      } catch (error) {
        console.error("Error fetching marathons:", error);
      }
    };

    fetchMarathons();
  }, []);

  return (
    <section className="bg-gray-100 ">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold mt-10 mb-6">
          Currently Active Marathons
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marathons.map((marathon) => (
            <div
              key={marathon._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={marathon.image}
                alt={marathon.title}
                className="w-full h-80"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{marathon.title}</h2>
                <p className="text-gray-600 text-sm mb-2">
                  Location:{" "}
                  <span className="font-medium">{marathon.location}</span>
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  Registration:{" "}
                  <span className="font-medium">
                    {marathon.startRegistrationDate}
                  </span>{" "}
                  -{" "}
                  <span className="font-medium">
                    {marathon.endRegistrationDate}
                  </span>
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  Distance:{" "}
                  <span className="font-medium">
                    {marathon.runningDistance}
                  </span>
                </p>
                <Link to={`/marathon/${marathon._id}`}>
                  {" "}
                  <button className="mt-4 w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-all">
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarathonCardList;
