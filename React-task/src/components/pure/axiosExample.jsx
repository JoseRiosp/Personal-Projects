import React, { useEffect, useState } from 'react'
import getUser from '../../services/axios-service'
import { Button } from '@mui/material';

const AxiosExample = () => {
    const [user, setUser] = useState({})
    
    useEffect(() => {
        getNewUser();
    }, []);

    console.log(user)

    function getNewUser(){
        getUser()
        .then((response)=>{
            console.log('Getting user data...')
            console.table(response.data.results[0])
            setUser(response.data.results[0]);
        })
        .catch((error)=>{alert('Something went wrong', error)})
    }
    

  return (

    <div>
      <h1>Axios Example</h1>
      { user !=null ?
            <div>
            <strong>{user.name.first}</strong>
            <p><img alt='avatar' src={user.picture.thumbnail}></img></p>
            <p>{user.gender}</p>
            <p>{user.age}</p>
            <p>{user.email}</p>
            <p>{user.cell}</p>
            <Button onClick={()=>{getNewUser()}}>Create new user</Button>
            </div>
        : <p>Create a new user...</p>}
    </div>
  )
}

export default AxiosExample
