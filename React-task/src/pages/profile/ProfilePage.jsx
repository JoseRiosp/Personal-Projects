import React from 'react'
import NavButtons from '../../hooks/navButtons'
import { useNavigate } from 'react-router-dom'

const ProfilePage = ({user}) => {

const navigate=useNavigate();

  return (
    <div>
      <h1>Your Profile</h1>
      <button onClick={()=>{navigate('/tasks')}}>Your tasks</button>
      <NavButtons></NavButtons>
    </div>
  )
}

export default ProfilePage
