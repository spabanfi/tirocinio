import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css"; // Importa il file CSS per lo stile della navbar

const Navbar = () => {
	return (
		<>
			<nav className='navbar'>
				<ul>
					<li>
						<Link to={"/"}>Home</Link>
					</li>
					<li>
						<Link to={"/Investimenti"}>Investimenti</Link>
					</li>
					<li>
						<Link to={"/About"}>About</Link>
					</li>
					<li>
						<Link to={"/Donazioni"}>Donazioni</Link>
					</li>
					<li>
						<Link to={"/Contact"}>Contatti</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
