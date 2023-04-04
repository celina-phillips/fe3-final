import React, { useState } from 'react'
import { useReducer } from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const initialState = {
  name: "",
  email: ""
}
//no me esta funcionando el use reducer ver eso
const reducer = (usuario, action) => {
  switch (action.type) {
    case 'name':
      return  usuario = {name: action.payload, ...usuario}
    case 'email':
      return usuario = {email: action.payload, ...usuario}
    default:
      throw new Error
  }
}

const Contact = () => {
  const [usuario, dispatch] = useReducer(reducer,initialState)
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  {/* Me falta validar el email */}
  
  const handleSubmit = (event) => {
    event.preventDefault()
    if(usuario.name.length > 5){
      setShow(true)
      setError(false)
    }else{
      setError(true)
    }
    
  }
  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <form onSubmit= {handleSubmit}>
        <label>Name</label>
        <input type="text" onChange={(event)=> dispatch({type:'name', payload: event.target.value})}/>
        <label>Email</label>
        <input type="email" onChange={(event)=> dispatch({type:'email', payload: event.target.value})}/>
        <button>Enviar</button>
      </form>
      {show && <h3>Gracias {usuario.name} te contactaremos cuanto antes vía email</h3>}
      {error&& <p>Coloque la información correcta</p>}
    </div>
  )
}

export default Contact