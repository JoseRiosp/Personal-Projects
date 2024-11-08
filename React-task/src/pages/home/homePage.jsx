import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import NavButtons from '../../hooks/navButtons';

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.pathname);
  const navigateProps =(path)=>{
    navigate(
      `${path}?online=true`,
      { state: { online: true} })
  };
  return (
    <div>
      <h1>Home Page</h1>
      <NavButtons></NavButtons>
      <button onClick={()=>{navigate('/profile')}}>
        Go to Profile
        </button>
        <button onClick={()=>{navigateProps('/online-state')}}>
          State / Query Params
        </button>
      <h2>Dashboard</h2>
    </div>
  )
}

export default HomePage
