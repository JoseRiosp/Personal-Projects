import React from 'react'
import { useState } from 'react'

function OptionalRender() {

    const [access, setAccess] = useState(true)

    const updateAccess =()=>{
        setAccess(!access);
    }

    let optionalButton;
if (access) {
    optionalButton= <button onClick={updateAccess}>Logout</button>
} else {
    optionalButton= <button onClick={updateAccess}>Login</button>
}

  return (
    <div>
      {optionalButton} 
    </div>
  )
}

export default OptionalRender
