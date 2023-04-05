import React from "react";
import { Link } from "react-router-dom";
import { useGlobalStates } from "./utils/Context";





const Card = ({ name, username, key }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    favDispatch({type: 'ADD_FAV', payload: dentist})
  }
  const {favDispatch} = useGlobalStates()

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={'/detail/' + key} key={key}>
          <h2>{name}</h2>
          <h3>{username}</h3>
          <h4>{key}</h4>
        </Link>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
