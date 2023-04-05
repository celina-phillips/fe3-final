import React from 'react'
import Card from '../Components/Card'
import { useGlobalStates } from '../Components/utils/Context.jsx'


//
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {dentistas} = useGlobalStates()
  const {theme}= useGlobalStates()
  return (
    <main className={theme?"dark":""}>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentistas.map(dentist=>{
          <Card key={dentist.id} dentist={dentist}/>
        })}        
      </div>
    </main>
  )
}

export default Home