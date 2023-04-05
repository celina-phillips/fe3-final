import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalStates } from './utils/Context'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {theme} = useGlobalStates()
  const {setTheme} = useGlobalStates()

  const switchTheme = () => {
    if(theme){
      setTheme(false)
    }else{
      setTheme(true)
    }
  }

  return (
    <nav className={theme?"dark":""}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to='/'><h3>Home</h3></Link>
      <Link to='/contact'><h3>Contact</h3></Link>
      <Link to='/favs'><h3>Favs</h3></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={switchTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar