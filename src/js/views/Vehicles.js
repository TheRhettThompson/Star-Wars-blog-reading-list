import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";


const Vehicles = () => {

    const { store, actions } = useContext(Context);
    const starWarsVehicles = store.vehicles.map((vehicles, index) => {
        return(
            <div key={index} className="container">
                <div className="card-header"> Vehicle Name: {vehicles.name}</div>
                <div className="card-details">
                    Length: {vehicles.length}
                    <br></br>
                    Crew: {vehicles.crew}
                    <br></br>
                    Vehicle Class: {vehicles.vehicle_class}
                </div>
            </div>

        )
    })

    return (
        <div>
            {starWarsVehicles}
        </div>
    )

}

export default Vehicles;
