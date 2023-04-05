import React from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/Context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {favState} = useGlobalStates()
  const {theme} = useGlobalStates()

  return (
    <React.Fragment className={theme?"dark":""} >
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favState.map(dentistFav=>{
          <Card key={dentistFav.id} dentistFav={dentistFav}/>
        })}
      </div>
    </React.Fragment>
  );
};

export default Favs;
