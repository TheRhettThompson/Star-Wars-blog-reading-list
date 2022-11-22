import React from "react";
import { Link } from "react-router-dom";
import People from "../views/People";
import Planets from "../views/Planets";
import Vehicles from "../views/Vehicles";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">Home</Link>
			<Link to="/people">People</Link>
			<Link to="/planets">Planets</Link>
			<Link to="/vehicles">Vehicles</Link>
		</nav>
	);
};
