import React from "react";
import running from "../assets/running.jpg";

const TrainingSection = () => {
  return (
    <section className="bg-gray-100">
      <div className="bg-gray-100 container mx-auto flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={running}
            alt="Group training"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:pl-8">
          <h2 className="text-4xl font-bold text-gray-900">
            Every Step Takes You Closer To Glory.
          </h2>
          <p className="text-gray-700 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* Progress Bars */}
          <div className="mt-6">
            <div className="flex justify-between text-gray-600">
              <span>Run Training</span>
              <span>98%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
              <div
                className="bg-orange-500 h-2 rounded-full"
                style={{ width: "98%" }}
              ></div>
            </div>

            <div className="flex justify-between text-gray-600 mt-4">
              <span>Facilities</span>
              <span>88%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
              <div
                className="bg-orange-500 h-2 rounded-full"
                style={{ width: "88%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
