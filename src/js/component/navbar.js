import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"
import Favorites from "../views/Favorites";
 

export const Navbar = () => {

	const { store } = useContext(Context);

	const favList = store.favorites.map((fav) =>{
		return (
			<div>
				<li key //missing code
			</div>
		)
	}) //missing code here

	return (
		<nav className="navbar navbar-light bg-light mb-3 m-5">
			<Link to="/">Home</Link>
			<Link to="/people">People</Link>
			<Link to="/planets">Planets</Link>
			<Link to="/vehicles">Vehicles</Link>


			<div className="dropdown">
			<button className = "d-flex btn btn-primary dropdown-toggle"
			type="button"
			//BOOTSTRAP DROP DOWN CODE HERE


			>
			Favorites
			<div className="mx-2 px-2 bg-warning rounded">
				{store.favorites.length}
			</div>
			</button>
			<ul className="dropdown-menu mt-2">
				{ Favorites}
			</ul>
			</div>
		</nav>
	);
};
