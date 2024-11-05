import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";

const ProtectedRoute = ({Component, defaultRoute}) => {
    let logged=false;
    const navigate=useNavigate();
    logged= localStorage.getItem('credentials');

    useEffect(() => {
        console.log('Looking for credentials...')
            if(!logged){
                console.log('No credentials found')
                navigate(defaultRoute)} else {
                    console.log('Credential found')
                }
    }, [logged,defaultRoute, navigate])
    
    return (logged ? <Component/> : <p>You have no access to this page</p> )
    
  
}

ProtectedRoute.propTypes={
    Component: PropTypes.func.isRequired,
    defaultRoute: PropTypes.string.isRequired
};

export default ProtectedRoute