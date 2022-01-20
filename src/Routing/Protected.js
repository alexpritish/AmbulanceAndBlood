import React from 'react';
import {Navigate,Outlet} from 'react-router';

const Protected = () => {
    const isToken=window.localStorage.getItem('Token');
    return isToken ? <Outlet/> : <Navigate to ="/auth"/>;
};

export default Protected;
