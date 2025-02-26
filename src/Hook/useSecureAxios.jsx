import axios from 'axios';
import React, { useContext, useEffect } from 'react';

import { Navigate } from 'react-router-dom';
import { AuthenticationContext } from '../Provider/AuthProvider';
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
});

const useSecureAxios = () => {
      const {  logoutUser } = useContext(AuthenticationContext);
    useEffect(()=>{
   axiosInstance.interceptors.response.use(response=>{
 return response;
   },error=>{
    if(error.status === 401 || error.status === 403){
        logoutUser()
    .then(()=>{
        console.log('logout user');
    })
    .catch(error=>{
        console.log(error);
        Navigate('/login');
    })
    }
    return Promise.reject(error)
   } )
    },[logoutUser])



    return axiosInstance;
};

export default useSecureAxios; 