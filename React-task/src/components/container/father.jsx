import React, { useState } from 'react'
import Child from '../pure/child'

const Father = () => {

    const [name, setName] = useState("")

    function displayTextFromChild (text){
        alert(`From the child: ${text}`);
    }

    function updateName(nameFromChild){
        setName(nameFromChild);
    }

  return (
    <div style={{background: "red", padding: "10px"}}>
      <Child name={name} send={displayTextFromChild} update={updateName}></Child>
    </div>
  )
}

export default Father
