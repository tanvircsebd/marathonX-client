import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Why Choose <span className="text-red-500">MarathonX</span>?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Experience the ultimate marathon management system designed to
          simplify your journey from registration to the finish line.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Effortless Registration
            </h3>
            <p className="text-gray-600">
              Quickly register for your favorite marathons with ease.
            </p>
          </div>
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Track Your Progress
            </h3>
            <p className="text-gray-600">
              Monitor your performance and stay motivated with real-time
              updates.
            </p>
          </div>
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Seamless Event Management
            </h3>
            <p className="text-gray-600">
              We ensure smooth execution of events with our innovative tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
