import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import NavButtons from '../../hooks/navButtons';


const AboutPage=()=> {
    
  return (
    <div>
      <NavButtons></NavButtons>
      <h1>About Page</h1>
    </div>
  )
}

export default AboutPage
