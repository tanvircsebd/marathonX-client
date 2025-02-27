import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthenticationContext } from "../Provider/AuthProvider";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { currentUser, logoutUser } = useContext(AuthenticationContext);

  const handleLogout = () => {
    logoutUser();
  };

  return (
    // <section className="bg-gradient-to-r from-black to-gray-800 fixed top-0 left-0 right-0 z-10">
    //   <div className={`w-full md:w-11/12 mx-auto relative `}>
    //     <div className="w-full flex  justify-center items-center">
    //       <div className="navbar">
    //         <div className="navbar-start">
    //           <div className="dropdown relative z-10">
    //             <div
    //               tabIndex={0}
    //               role="button"
    //               className="btn btn-ghost lg:hidden"
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className="h-5 w-5"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="white" // Set the stroke color to white
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="M4 6h16M4 12h8m-8 6h16"
    //                 />
    //               </svg>
    //             </div>
    //             <ul
    //               tabIndex={0}
    //               className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow bg-black"
    //             >
    //               <NavLink
    //                 className={({ isActive }) =>
    //                   `text-lg font-bold ${
    //                     isActive ? "text-red-500 underline" : "text-white"
    //                   }`
    //                 }
    //                 to="/"
    //               >
    //                 Home
    //               </NavLink>
    //               {currentUser && (
    //                 <NavLink
    //                   className={({ isActive }) =>
    //                     `text-lg font-bold ${
    //                       isActive ? "text-red-500 underline" : "text-white"
    //                     }`
    //                   }
    //                   to="/marathons"
    //                 >
    //                   Marathons
    //                 </NavLink>
    //               )}
    //               {currentUser && (
    //                 <NavLink
    //                   className={({ isActive }) =>
    //                     `text-lg font-bold ${
    //                       isActive ? "text-red-500 underline" : "text-white"
    //                     }`
    //                   }
    //                   to="/dashboard"
    //                 >
    //                   Dashboard
    //                 </NavLink>
    //               )}

    //               <NavLink
    //                 className={({ isActive }) =>
    //                   `text-lg font-bold ${
    //                     isActive ? "text-red-500 underline" : "text-white"
    //                   }`
    //                 }
    //                 to="/about"
    //               >
    //                 About Us
    //               </NavLink>
    //               <NavLink
    //                 className={({ isActive }) =>
    //                   `text-lg font-bold ${
    //                     isActive ? "text-red-500 underline" : "text-white"
    //                   }`
    //                 }
    //                 to="/contact"
    //               >
    //                 Contact
    //               </NavLink>
    //             </ul>
    //           </div>
    //           <img src={logo} className="md:h-10 md:w-10 w-8 h-8" alt="Logo" />

    //           <a className={`ml-2 text-white font-bold text-lg md:text-2xl`}>
    //             <span className="text-red-500">MarathonX</span>
    //           </a>
    //         </div>
    //         <div className="navbar-center hidden lg:flex">
    //           <ul className="menu menu-horizontal px-1 gap-5">
    //             <NavLink
    //               className={({ isActive }) =>
    //                 `text-lg font-bold ${
    //                   isActive ? "text-red-500 underline" : "text-white"
    //                 }`
    //               }
    //               to="/"
    //             >
    //               Home
    //             </NavLink>
    //             {currentUser && (
    //               <NavLink
    //                 className={({ isActive }) =>
    //                   `text-lg font-bold ${
    //                     isActive ? "text-red-500 underline" : "text-white"
    //                   }`
    //                 }
    //                 to="/marathons"
    //               >
    //                 Marathons
    //               </NavLink>
    //             )}
    //             {currentUser && (
    //               <NavLink
    //                 className={({ isActive }) =>
    //                   `text-lg font-bold ${
    //                     isActive ? "text-red-500 underline" : "text-white"
    //                   }`
    //                 }
    //                 to="/dashboard"
    //               >
    //                 Dashboard
    //               </NavLink>
    //             )}
    //             <NavLink
    //               className={({ isActive }) =>
    //                 `text-lg font-bold ${
    //                   isActive ? "text-red-500 underline" : "text-white"
    //                 }`
    //               }
    //               to="/about"
    //             >
    //               About Us
    //             </NavLink>
    //             <NavLink
    //               className={({ isActive }) =>
    //                 `text-lg font-bold ${
    //                   isActive ? "text-red-500 underline" : "text-white"
    //                 }`
    //               }
    //               to="/contact"
    //             >
    //               Contact Us
    //             </NavLink>
    //           </ul>
    //         </div>
    //         <div className="navbar-end">
    //           {currentUser ? (
    //             <div className="flex gap-3 justify-center items-center">
    //               <img
    //                 src={currentUser.photoURL}
    //                 alt="User Avatar"
    //                 className="w-10 h-10 rounded-full"
    //                 title={currentUser.displayName}
    //               />
    //               <button
    //                 className="btn text-lg rounded-full bg-orange-500 text-white"
    //                 onClick={handleLogout}
    //               >
    //                 Logout
    //               </button>
    //             </div>
    //           ) : (
    //             <div className="flex gap-2 md:gap-5">
    //               <NavLink
    //                 to="/login"
    //                 className="btn text-lg rounded-full bg-orange-500 text-white"
    //               >
    //                 Login
    //               </NavLink>
    //               <NavLink
    //                 to="/reg"
    //                 className="btn text-lg rounded-full bg-orange-500 text-white"
    //               >
    //                 Register
    //               </NavLink>
    //             </div>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="bg-gradient-to-r from-black to-gray-800 fixed top-0 left-0 right-0 z-10">
      <div className="w-11/12 mx-auto">
        <div className="navbar flex justify-between items-center py-3">
          {/* Logo & Brand Name (Left Side) */}
          <div className="flex items-center gap-2">
            <img src={logo} className="md:h-10 md:w-10 w-8 h-8" alt="Logo" />
            <a className="text-white font-bold text-lg md:text-2xl">
              <span className="text-red-500">MarathonX</span>
            </a>
          </div>

          {/* Right-Side Menu (Navigation + Auth) */}
          <div className="flex items-center gap-6">
            {/* Navigation Links */}
            <ul className="hidden lg:flex menu menu-horizontal px-1 gap-5">
              <NavLink
                className={({ isActive }) =>
                  `text-lg font-bold ${
                    isActive ? "text-red-500 underline" : "text-white"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `text-lg font-bold ${
                    isActive ? "text-red-500 underline" : "text-white"
                  }`
                }
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `text-lg font-bold ${
                    isActive ? "text-red-500 underline" : "text-white"
                  }`
                }
                to="/contact"
              >
                Contact
              </NavLink>
              {currentUser && (
                <NavLink
                  className={({ isActive }) =>
                    `text-lg font-bold ${
                      isActive ? "text-red-500 underline" : "text-white"
                    }`
                  }
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              )}
              {currentUser && (
                <NavLink
                  className={({ isActive }) =>
                    `text-lg font-bold ${
                      isActive ? "text-red-500 underline" : "text-white"
                    }`
                  }
                  to="/dashboard/my-marathon"
                >
                  My Marathons
                </NavLink>
              )}
            </ul>

            {/* Auth Buttons */}
            {currentUser ? (
              <div className="flex items-center gap-3">
                <img
                  src={currentUser.photoURL}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                  title={currentUser.displayName}
                />
                <button
                  className="btn text-lg rounded-full bg-orange-500 text-white"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-3">
                <NavLink
                  to="/login"
                  className="btn text-lg rounded-full bg-orange-500 text-white"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/reg"
                  className="btn text-lg rounded-full bg-orange-500 text-white"
                >
                  Register
                </NavLink>
              </div>
            )}
          </div>

          {/* Mobile Menu (Hamburger Icon) */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content right-0 mt-3 w-52 p-2 shadow bg-black rounded-box"
            >
              <NavLink
                className={({ isActive }) =>
                  `text-lg font-bold ${
                    isActive ? "text-red-500 underline" : "text-white"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `text-lg font-bold ${
                    isActive ? "text-red-500 underline" : "text-white"
                  }`
                }
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `text-lg font-bold ${
                    isActive ? "text-red-500 underline" : "text-white"
                  }`
                }
                to="/contact"
              >
                Contact
              </NavLink>
              {currentUser && (
                <NavLink
                  className={({ isActive }) =>
                    `text-lg font-bold ${
                      isActive ? "text-red-500 underline" : "text-white"
                    }`
                  }
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              )}
              {currentUser && (
                <NavLink
                  className={({ isActive }) =>
                    `text-lg font-bold ${
                      isActive ? "text-red-500 underline" : "text-white"
                    }`
                  }
                  to="/dashboard/my-marathon"
                >
                  My Marathons
                </NavLink>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
