import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 mb-10 bg-white shadow-lg rounded-2xl mt-16 dark:bg-gray-900 text-black dark:text-white">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">
          About <span className="text-blue-600">MarathonX</span>
        </h1>
      </header>

      <section className="mb-8 text-gray-700">
        <p className="text-lg leading-relaxed">
          Welcome to{" "}
          <span className="font-semibold text-blue-600">MarathonX</span>, your
          ultimate companion for marathons and running events! Whether you're a
          seasoned runner or just starting out, we provide everything you need
          to plan, track, and improve your marathon journey.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-600 pl-3">
          Our Mission
        </h2>
        <p className="text-lg mt-2 text-gray-700">
          At <span className="font-semibold text-blue-600">MarathonX</span>, our
          mission is to help runners of all levels achieve their personal bests.
          We aim to create a seamless experience for athletes, offering easy
          event registration, real-time tracking, and insightful data to help
          you perform at your best.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-600 pl-3">
          What We Offer
        </h2>
        <ul className="mt-4 space-y-3 text-lg text-gray-700">
          <li className="flex items-center gap-2">
            ✅{" "}
            <span>
              Event Registration: Easily sign up for upcoming marathons and
              running events.
            </span>
          </li>
          <li className="flex items-center gap-2">
            ✅{" "}
            <span>
              Race Tracking: Get real-time updates during events, including your
              pace, position, and more.
            </span>
          </li>
          <li className="flex items-center gap-2">
            ✅{" "}
            <span>
              Training Plans: Tailored training schedules to help you prepare
              for your marathon.
            </span>
          </li>
          <li className="flex items-center gap-2">
            ✅{" "}
            <span>
              Community Support: Connect with fellow runners, share tips, and
              stay motivated.
            </span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-600 pl-3">
          Meet the Team
        </h2>
        <p className="text-lg mt-2 text-gray-700">
          Our team is made up of passionate runners, tech enthusiasts, and event
          organizers who are dedicated to making your marathon experience
          smoother and more enjoyable.
        </p>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-6">
          {/* Team Member 1 */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <img
              src="https://media.istockphoto.com/id/165855785/photo/mature-businessman.jpg?s=612x612&w=0&k=20&c=lgNccVYmF6rRan_yH6gA0eJxQHdUwKw9kN9po06dCDI="
              alt="John Doe"
              className="w-24 h-24 mx-auto rounded-full mb-3 border-4 border-blue-600"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              David Miller
            </h3>
            <p className="text-gray-600 text-sm">
              Co-Founder & Marathon Expert
            </p>
            <p className="text-gray-700 mt-2 text-sm">
              A seasoned marathon runner with 10+ years of experience, guiding
              athletes to achieve their goals.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <img
              src="https://cms.tnj.com/wp-content/uploads/2021/09/News_Business_Thasunda-Duckett_REC10A0117.jpg"
              alt="Jane Smith"
              className="w-24 h-24 mx-auto rounded-full mb-3 border-4 border-blue-600"
            />
            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-gray-600 text-sm">
              Lead Developer & Tech Innovator
            </p>
            <p className="text-gray-700 mt-2 text-sm">
              A tech enthusiast passionate about building seamless race-tracking
              experiences.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <img
              src="https://media.istockphoto.com/id/888273780/photo/im-living-proof-of-business-success.jpg?s=612x612&w=0&k=20&c=lyIyr_xJiDrBvxYcgGrxR73kvfib86u5r2Rk2-5z6fo="
              alt="Alex Johnson"
              className="w-24 h-24 mx-auto rounded-full mb-3 border-4 border-blue-600"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Michael Carter
            </h3>
            <p className="text-gray-600 text-sm">
              Event Coordinator & Community Manager
            </p>
            <p className="text-gray-700 mt-2 text-sm">
              Dedicated to organizing top-tier running events and fostering a
              vibrant runner’s community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
