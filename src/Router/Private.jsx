import React, { useContext } from 'react';
import { AuthenticationContext } from '../Provider/AuthProvider';
import Loading from '../Component/Loading';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
    const {  currentUser,   isLoading } = useContext(AuthenticationContext);

if(isLoading){
    return <Loading></Loading>
}
    if (currentUser && currentUser?.email) {
        return children;
    }

   
    return <Navigate  to="/login" />;
};

export default Private;