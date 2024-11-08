import React from 'react'

import { login } from '../../services/fetchService';
import { Button } from '@mui/material';

const UsersExample = () => {

    const authUser=()=>{
        login('eve.holt@reqres.in', 'cityslicka')
        .then((response)=>{
            console.log('Obtaining user...')
            console.log('TOKEN', response.token);
            sessionStorage.setItem('token', response.token)
        })
        .catch((error)=>{
            alert('Error while login the user:', error)
        })
        .finally(()=>{
            console.log('(Ended) Obtaining user... Navigating to Home...')
            
        })

    }
  return (
    <div>
      <h1>User</h1>
      <Button onClick={()=>{authUser()}}>Get User Data</Button>
    </div>
  )
}

export default UsersExample;
