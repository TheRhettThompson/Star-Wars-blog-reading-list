import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";


const Planets = () => {

    const { store, actions } = useContext(Context);
    const starWarsPlanets = store.planets.map((planets, index) => {
        return(
            <div key={index} className="container">
                <div className="card-header"> Planet Name: {planets.name}</div>
                <div className="card-details">
                    Diameter: {planets.diameter}
                    <br></br>
                    Climate: {planets.climate}
                    <br></br>
                    Population: {planets.population}
                </div>
            </div>
        ) 

    })

  return (
        <div>
            {starWarsPlanets}
        </div>
    )

}

export default Planets;