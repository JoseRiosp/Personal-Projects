import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ButtonGroup, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


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
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button onClick={goBack}><ArrowBackIcon/></Button>
        <Button onClick={()=>{navigate('/')}}>
          Go to Home Page
        </Button>
        <Button onClick={goFoward}><ArrowForwardIcon/></Button>
</ButtonGroup>
      </div>
    </div>
  )
}

export default NavButtons;
