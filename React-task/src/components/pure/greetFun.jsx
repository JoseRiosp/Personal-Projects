
import React, {useState} from 'react'
import PropTypes from 'prop-types'

const GreetFun = (props) => {

    //usar useState
    //const [variable, metodo para actualizarla] = useState(valor)
const [age, setage] = useState(0) //Hooks
const birthday=()=>{
    //actualizar el state
    setage(age +1); 
}

  return (
    <div>
                <h1>Hola { props.name}, desde la función!</h1>
                <h2>Mi edad es {age}</h2>
                <div>
                    <button onClick={birthday}>+1 years</button> 
                </div>
            </div>
  )
}

GreetFun.propTypes = {
    name: PropTypes.string
}

export default GreetFun
