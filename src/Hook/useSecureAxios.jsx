// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";

// const axiosSecure = axios.create({
//     baseURL: 'https://bistro-boss-server-seven-sage.vercel.app'
// })
// const useAxiosSecure = () => {
//     const navigate = useNavigate();
//     const { logOut } = useAuth();

//     // request interceptor to add authorization header for every secure call to teh api
//     axiosSecure.interceptors.request.use(function (config) {
//         const token = localStorage.getItem('access-token')
//         // console.log('request stopped by interceptors', token)
//         config.headers.authorization = `Bearer ${token}`;
//         return config;
//     }, function (error) {
//         // Do something with request error
//         return Promise.reject(error);
//     });

//     // intercepts 401 and 403 status
//     axiosSecure.interceptors.response.use(function (response) {
//         return response;
//     }, async (error) => {
//         const status = error.response.status;
//         // console.log('status error in the interceptor', status);
//         // for 401 or 403 logout the user and move the user to the login
//         if (status === 401 || status === 403) {
//             await logOut();
//             navigate('/login');
//         }
//         return Promise.reject(error);
//     })

//     return axiosSecure;
// };

// export default useAxiosSecure;
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const axiosInstance = axios.create({
  //   baseURL: "https://marathonx-server.vercel.app",
  //   baseURL: "http://localhost:5000",
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

const useSecureAxios = () => {
  const { logoutUser } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Add request interceptor to attach token
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("access-token");
        if (token) {
          config.headers.authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Add response interceptor to handle 401/403 errors
    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          try {
            await logoutUser();
            console.log("User logged out due to authentication error.");
            navigate("/login");
          } catch (logoutError) {
            console.error("Error during logout:", logoutError);
          }
        }
        return Promise.reject(error);
      }
    );

    // Cleanup: Remove interceptors when component unmounts
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [logoutUser, navigate]);

  return axiosInstance;
};

export default useSecureAxios;

// import axios from "axios";
// import React, { useContext, useEffect } from "react";

// import { Navigate } from "react-router-dom";
// import { AuthenticationContext } from "../Provider/AuthProvider";
// const axiosInstance = axios.create({
//   // baseURL: import.meta.env.VITE_BACKEND_URL,
//   baseURL: "https://marathonx-server.vercel.app",
//   withCredentials: true,
// });

// const useSecureAxios = () => {
//   const { logoutUser } = useContext(AuthenticationContext);
//   useEffect(() => {
//     axiosInstance.interceptors.response.use(
//       (response) => {
//         return response;
//       },
//       (error) => {
//         if (error.status === 401 || error.status === 403) {
//           logoutUser()
//             .then(() => {
//               console.log("logout user");
//             })
//             .catch((error) => {
//               console.log(error);
//               Navigate("/login");
//             });
//         }
//         return Promise.reject(error);
//       }
//     );
//   }, [logoutUser]);

//   return axiosInstance;
// };

// export default useSecureAxios;
