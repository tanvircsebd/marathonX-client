import React from "react";
import city from "../assets/city.jpg";
import beach from "../assets/beach.jpg";
import mountain from "../assets/mountain.jpg";
import dash from "../assets/desert.jpg";
import midnigh from "../assets/midnight.jpg";
import county from "../assets/county.jpg";
const EventCard = () => {
  return (
    <section className="py-10 bg-gray-100" id="marathon">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Get Ready for the Thrill: Upcoming Marathons 2025
        </h2>

        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Event Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src={city}
              alt="City Sprint Marathon"
              className="w-full h-80"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                City Sprint Marathon
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Date:</strong> March 15, 2025
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Location:</strong> New York City, USA
              </p>
              <p className="text-sm text-gray-700">
                Experience the thrill of running through the heart of NYC!
              </p>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src={beach} alt="Beachside Run" className="w-full h-80" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Beachside Run
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Date:</strong> April 10, 2025
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Location:</strong> Santa Monica, USA
              </p>
              <p className="text-sm text-gray-700">
                Run alongside the calming ocean waves at this scenic event.
              </p>
            </div>
          </div>

          {/* Event Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src={mountain}
              alt="Mountain Challenge"
              className="w-full h-80"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Mountain Challenge
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Date:</strong> May 5, 2025
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Location:</strong> Denver, USA
              </p>
              <p className="text-sm text-gray-700">
                Take on the elevation in this exciting mountain race.
              </p>
            </div>
          </div>

          {/* Event Card 4 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src={dash} alt="Desert Dash" className="w-full h-80" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Desert Dash
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Date:</strong> June 20, 2025
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Location:</strong> Phoenix, USA
              </p>
              <p className="text-sm text-gray-700">
                Conquer the heat and push your limits in this unique marathon.
              </p>
            </div>
          </div>

          {/* Event Card 5 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src={midnigh} alt="Midnight Run" className="w-full h-80" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Midnight Run
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Date:</strong> July 15, 2025
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Location:</strong> Las Vegas, USA
              </p>
              <p className="text-sm text-gray-700">
                A nighttime adventure with glowing lights and entertainment.
              </p>
            </div>
          </div>

          {/* Event Card 6 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src={county} alt="Countryside Loop" className="w-full h-80" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Countryside Loop
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Date:</strong> August 25, 2025
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Location:</strong> Nashville, USA
              </p>
              <p className="text-sm text-gray-700">
                Enjoy fresh air and rolling hills in this picturesque event.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCard;
