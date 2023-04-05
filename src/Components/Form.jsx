import React from "react";
import { useState } from 'react'
import { useReducer } from 'react'


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const initialState = {
    name: "",
    email: ""
  }
  //no me esta funcionando el use reducer ver eso
  const userReducer = (state, action) => {
    switch (action.type) {
      case 'name':
        return  {name: action.payload, ...state}
      case 'email':
        return  {email: action.payload, ...state}
      default:
        throw new Error
    }
  }
  
  const [userState, userDispatch] = useReducer(userReducer,initialState)
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  {/* Me falta validar el email */}
  {/*emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;  --  && emailRegex.test(userState.email)*/}

  const handleSubmit = (event) => {
    event.preventDefault()
    if(userState.name.length > 5){
      setShow(true)
      setError(false)
    }else{
      setError(true)
    }
  }

  return (
    <div>
      <form onSubmit= {handleSubmit}>
        <label>Name</label>
        <input type="text" onChange={(event)=> userDispatch({type:'name', payload: event.target.value})}/>
        <label>Email</label>
        <input type="email" onChange={(event)=> userDispatch({type:'email', payload: event.target.value})}/>
        <button>Enviar</button>
      </form>
      {show && <h3>Gracias {userState.name} te contactaremos cuanto antes vía email</h3>}
      {error&& <p>Coloque la información correcta</p>}
    </div>
  )
}

export default Form;
