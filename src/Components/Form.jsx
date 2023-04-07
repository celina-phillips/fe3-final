import React from "react";
import { useState } from 'react'
import { useReducer } from 'react'


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  
  const [user, setUser] = useState({
    name:"",
    email:""
  })
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  {/* Me falta validar el email */}
  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; 

  const handleSubmit = (event) => {
    event.preventDefault()
    if(user.name.length > 5  && emailRegex.test>(user.email)){
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
        <input type="text" onChange={(event)=> setUser({...user, name: event.target.value})}/>
        <label>Email</label>
        <input type="email" onChange={(event)=> setUser({...user, email: event.target.value})}/>
        <button>Enviar</button>
      </form>
      {show && <h3>Gracias {user.name} te contactaremos cuanto antes vía email</h3>}
      {error&& <p>Coloque la información correcta</p>}
    </div>
  )
}

export default Form;
