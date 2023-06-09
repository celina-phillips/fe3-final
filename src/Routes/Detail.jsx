import React from 'react'
import { useParams } from 'react-router-dom'
import  { useEffect, useState } from 'react'
import { useGlobalStates } from '../Components/utils/Context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {key} = useParams()
  const url = 'https://jsonplaceholder.typicode.com/users/' + key

  const [dentist, setDentist] = useState({})
  const {theme} = useGlobalStates()
  

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setDentist(data))
}, [])

  return (
    <React.Fragment className={theme?"dark":""}>
      <h1>Detail Dentist id </h1>
      <h2>{dentist.name}</h2>
      <h3>{dentist.email}</h3>
      <h3>{dentist.phone}</h3>
      <h4>{dentist.website}</h4>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </React.Fragment>    
  )
}

export default Detail