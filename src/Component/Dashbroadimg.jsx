import React, { useContext } from "react";
import { AuthenticationContext } from "../Provider/AuthProvider";
import banner from "../assets/dahsbroad.png";

const Dashbroadimg = () => {
  const { currentUser } = useContext(AuthenticationContext);
  return (
    <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        Welcome,{" "}
        <span className="text-red-500">
          {currentUser ? currentUser.displayName : "Guest"}
        </span>{" "}
        to the <span className="text-red-500">MarathonX</span> Website
      </h1>

      <img
        src={banner}
        alt="Dashboard"
        className="w-full max-w-md mt-6 rounded-lg shadow-md"
      />
    </div>
  );
};

export default Dashbroadimg;
