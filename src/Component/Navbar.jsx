import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AuthenticationContext } from "../Provider/AuthProvider";
import logo from "../assets/logo.png";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"; // Icons for theme switch

const Navbar = () => {
  const { currentUser, logoutUser } = useContext(AuthenticationContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // Apply the theme to the body
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme); // Save user preference
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <section className="bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 fixed top-0 left-0 right-0 z-10">
      <div className="w-11/12 mx-auto">
        <div className="navbar flex justify-between items-center py-3">
          {/* Logo & Brand Name (Left Side) */}
          <div className="flex items-center gap-2">
            <img src={logo} className="md:h-10 md:w-10 w-8 h-8" alt="Logo" />
            <a className="text-white dark:text-black font-bold text-lg md:text-2xl">
              <span className="text-red-500">MarathonX</span>
            </a>
          </div>

          {/* Right-Side Menu (Navigation + Auth + Theme Toggle) */}
          <div className="flex items-center gap-6">
            {/* Navigation Links */}
            <ul className="hidden lg:flex menu menu-horizontal px-1 gap-5">
              <NavLink
                className={({ isActive }) =>
                  `text-lg font-bold ${
                    isActive
                      ? "text-red-500 underline"
                      : "text-white dark:text-black"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
              {currentUser && (
                <NavLink
                  className={({ isActive }) =>
                    `text-lg font-bold ${
                      isActive
                        ? "text-red-500 underline"
                        : "text-white dark:text-black"
                    }`
                  }
                  to="/marathons"
                >
                  Marathons
                </NavLink>
              )}
              <NavLink
                className={({ isActive }) =>
                  `text-lg font-bold ${
                    isActive
                      ? "text-red-500 underline"
                      : "text-white dark:text-black"
                  }`
                }
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `text-lg font-bold ${
                    isActive
                      ? "text-red-500 underline"
                      : "text-white dark:text-black"
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
                      isActive
                        ? "text-red-500 underline"
                        : "text-white dark:text-black"
                    }`
                  }
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              )}
            </ul>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-700 dark:bg-gray-300"
            >
              {theme === "dark" ? (
                <SunIcon className="w-6 h-6 text-yellow-500" />
              ) : (
                <MoonIcon className="w-6 h-6 text-gray-800" />
              )}
            </button>

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
        </div>
      </div>
    </section>
  );
};

export default Navbar;

// import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import { AuthenticationContext } from "../Provider/AuthProvider";
// import logo from "../assets/logo.png";

// const Navbar = () => {
//   const { currentUser, logoutUser } = useContext(AuthenticationContext);

//   const handleLogout = () => {
//     logoutUser();
//   };

//   return (
//     <section className="bg-gradient-to-r from-black to-gray-800 fixed top-0 left-0 right-0 z-10">
//       <div className="w-11/12 mx-auto">
//         <div className="navbar flex justify-between items-center py-3">
//           {/* Logo & Brand Name (Left Side) */}
//           <div className="flex items-center gap-2">
//             <img src={logo} className="md:h-10 md:w-10 w-8 h-8" alt="Logo" />
//             <a className="text-white font-bold text-lg md:text-2xl">
//               <span className="text-red-500">MarathonX</span>
//             </a>
//           </div>

//           {/* Right-Side Menu (Navigation + Auth) */}
//           <div className="flex items-center gap-6">
//             {/* Navigation Links */}
//             <ul className="hidden lg:flex menu menu-horizontal px-1 gap-5">
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
//               <NavLink
//                 className={({ isActive }) =>
//                   `text-lg font-bold ${
//                     isActive ? "text-red-500 underline" : "text-white"
//                   }`
//                 }
//                 to="/about"
//               >
//                 About
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
//             </ul>

//             {/* Auth Buttons */}
//             {currentUser ? (
//               <div className="flex items-center gap-3">
//                 <img
//                   src={currentUser.photoURL}
//                   alt="User Avatar"
//                   className="w-10 h-10 rounded-full"
//                   title={currentUser.displayName}
//                 />
//                 <button
//                   className="btn text-lg rounded-full bg-orange-500 text-white"
//                   onClick={handleLogout}
//                 >
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <div className="flex gap-3">
//                 <NavLink
//                   to="/login"
//                   className="btn text-lg rounded-full bg-orange-500 text-white"
//                 >
//                   Login
//                 </NavLink>
//                 <NavLink
//                   to="/reg"
//                   className="btn text-lg rounded-full bg-orange-500 text-white"
//                 >
//                   Register
//                 </NavLink>
//               </div>
//             )}
//           </div>

//           {/* Mobile Menu (Hamburger Icon) */}
//           <div className="dropdown lg:hidden">
//             <div tabIndex={0} role="button" className="btn btn-ghost">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-white"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
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
//               className="menu menu-sm dropdown-content right-0 mt-3 w-52 p-2 shadow bg-black rounded-box"
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
//               <NavLink
//                 className={({ isActive }) =>
//                   `text-lg font-bold ${
//                     isActive ? "text-red-500 underline" : "text-white"
//                   }`
//                 }
//                 to="/about"
//               >
//                 About
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
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Navbar;
