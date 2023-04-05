import React from 'react'
import Form from '../Components/Form'
import { useGlobalStates } from '../Components/utils/Context'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const initialState = {
  name: "",
  email: ""
}
//no me esta funcionando el use reducer ver eso
const userReducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return  state = {name: action.payload, ...state}
    case 'email':
      return  state = {email: action.payload, ...state}
    default:
      throw new Error
  }
}

const Contact = () => {

  const {theme} = useGlobalStates()
  
  return (
    <div className={theme?"dark":""}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>      
    </div>
  )
}

export default Contact