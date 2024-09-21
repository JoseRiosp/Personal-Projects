import React, { useState } from 'react'

//Definiendo estilos en constantes:

// Estilo para usuarios loggeado 
 const loggedStyle ={
    color: 'white'
 };

 //Estilos para usuarios no loggeado

 const unloggedStyle={
    color: 'tomato',
    fontWeight: 'bold'
 };


const GreetingStyled = (props) => {

    // GEneramos un estado para el componente y controlar si el usuario
    //Esta o no loggeado

const [logged, setLogged] = useState(false)

//Función con html para después llamarlas

const greetingUser = ()=> (<p>Hola, {props.name}</p>); 
const logIn =()=>  (<p>Please login</p>);

  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
        {
            logged ? 
            greetingUser() : logIn()
        }
        <button onClick={()=>{
            console.log("Boton pulsado")
            setLogged(!logged)
        }}> 
            { logged ? "Logout" : "Login"}
        </button>
    </div>
  )
}

export default GreetingStyled
