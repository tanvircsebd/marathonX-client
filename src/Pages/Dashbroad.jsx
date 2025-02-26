import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import { AuthenticationContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const { currentUser } = useContext(AuthenticationContext);
  return (
    <div className="mt-16">
      <Helmet>
        <title>Dashbroad</title>
      </Helmet>
      <Navbar></Navbar>

      <div className="bg-gray-100 min-h-screen">
        <div className="w-full md:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 py-8">
          {/* Sidebar Links */}
          <div className="bg-white p-4 rounded-lg shadow-md md:col-span-4 lg:col-span-3">
            {" "}
            {/* 30% width */}
            <nav className="flex flex-col space-y-4">
              <NavLink
                to="/dashboard/addMarathon"
                className={({ isActive }) =>
                  `block px-4 py-2 text-center font-semibold rounded-md ${
                    isActive
                      ? "bg-red-400 text-gray-800 hover:bg-red-500"
                      : "bg-gray-200 text-black shadow-lg"
                  }`
                }
              >
                Add Marathon
              </NavLink>
              <NavLink
                to="/dashboard/my-marathon"
                className={({ isActive }) =>
                  `block px-4 py-2 text-center font-semibold rounded-md ${
                    isActive
                      ? "bg-red-400 text-gray-800 hover:bg-red-500"
                      : "bg-gray-200 text-black shadow-lg"
                  }`
                }
              >
                My Marathon
              </NavLink>
              <NavLink
                to="/dashboard/my-apply-list"
                className={({ isActive }) =>
                  `block px-4 py-2 text-center font-semibold rounded-md ${
                    isActive
                      ? "bg-red-400 text-gray-800 hover:bg-red-500"
                      : "bg-gray-200 text-black shadow-lg"
                  }`
                }
              >
                My Apply List
              </NavLink>
            </nav>
          </div>

          {/* Outlet Content */}
          <div className="bg-white p-6 rounded-lg shadow-md md:col-span-8 lg:col-span-9">
            {/* This is where the Dashbroadimg component will be rendered */}
            <Outlet />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
