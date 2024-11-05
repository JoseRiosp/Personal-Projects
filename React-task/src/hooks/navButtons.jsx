import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


export const NavButtons=()=> {
  const location = useLocation();
  const navigate = useNavigate();

    console.log('Current route:', location.pathname)

    const goBack=()=>{
        navigate(-1);
    }

    const goFoward=()=>{
        navigate(1);
    }
  return (
    <div>
      <div>
        <button onClick={()=>{navigate('/')}}>
            Go to Home Page
        </button>
        <button onClick={goBack}>
            Go Back
        </button>
        <button onClick={goFoward}>
            Go Foward
        </button>
      </div>
    </div>
  )
}

export default NavButtons;
