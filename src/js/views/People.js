import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";


const People = () => {

    const { store, actions } = useContext(Context);
    const starWarsCharacters = store.people.map((character, index) => {
        return(
            <div key={index} className="container">
                <div className="card-header"> Character Name: {character.name}</div>
                <div className="card-details">
                    Height: {character.height}
                    <br></br>
                    Birthday: {character.birth_year}
                    <br></br>
                    Gender: {character.gender}
                </div>
            </div>
        )
    })

    return (
        <div>
            {starWarsCharacters}
        </div>
    )

}

export default People;