import React, { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <button className="btn btn-square loading mx-auto"></button>
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;