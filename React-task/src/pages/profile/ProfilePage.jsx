import React from 'react'
import NavButtons from '../../hooks/navButtons'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

const ProfilePage = ({user}) => {

const navigate=useNavigate();

  return (
    <div>
      <h1>Your Profile</h1>
      <NavButtons></NavButtons>
      <Button variant='outlined' onClick={()=>{navigate('/tasks')}}>Your tasks</Button>
    </div>
  )
}

export default ProfilePage
