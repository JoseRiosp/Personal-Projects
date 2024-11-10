import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from "prop-types";

const ProtectedRoute = ({Component, defaultRoute}) => {
    let logged=false;
    const navigate=useNavigate();
    const location=useLocation();
    logged= sessionStorage.getItem('token');

    useEffect(() => {
        console.log('Looking for credentials...')
            if(!logged){
                console.log('No credentials found')
                console.log('showing route:', location.pathname)
                navigate(defaultRoute)} else {
                    console.log('Credential found')
                }
    }, [logged,defaultRoute, navigate, location])
    
    return (logged ? <Component/> : <p>Something went wrong</p> )
    
  
}

ProtectedRoute.propTypes={
    Component: PropTypes.func.isRequired,
    defaultRoute: PropTypes.string.isRequired
};

export default ProtectedRoute