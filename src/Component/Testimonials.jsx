import React from "react";
import male from "../assets/male.jpg";
import female from "../assets/female.jpg";
import female2 from "../assets/female3.jpg";

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-black">
          What Runners Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Testimonial Card 1 */}
          <div className="w-full bg-white rounded-lg p-6 shadow-lg text-gray-800">
            <img
              src={female}
              alt="Emily Johnson"
              className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-black"
            />
            <p className="text-lg italic text-gray-700">
              "MarathonX made my first marathon experience unforgettable!
              Everything was so smooth."
            </p>
            <h3 className="text-xl font-semibold mt-4 text-red-500">
              — Emily Johnson
            </h3>
          </div>

          {/* Testimonial Card 2 */}
          <div className="w-full bg-white rounded-lg p-6 shadow-lg text-gray-800">
            <img
              src={male}
              alt="Michael Smith"
              className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-black"
            />
            <p className="text-lg italic text-gray-700">
              "I loved how easy it was to register and track my stats. Highly
              recommended for all runners!"
            </p>
            <h3 className="text-xl font-semibold mt-4 text-red-500">
              — Michael Smith
            </h3>
          </div>

          {/* Testimonial Card 3 */}
          <div className="w-full bg-white rounded-lg p-6 shadow-lg text-gray-800">
            <img
              src={female2}
              alt="Sarah Lee"
              className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-black"
            />
            <p className="text-lg italic text-gray-700">
              "The support and organization during the event were top-notch.
              Will definitely participate again."
            </p>
            <h3 className="text-xl font-semibold mt-4 text-red-500">
              — Sarah Lee
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
