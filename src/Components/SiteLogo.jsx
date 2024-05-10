// SiteLogo.js

import React from "react";
import "../assets/css/SiteLogo.css";

const SiteLogo = () => {
	return (
		<div className='logo-parent'>
			<img src='./src/assets/img/istruz.jpg' alt='logo istruzione'></img>
			<div className='logo-text'>
				<h3>Scuola Elementare Happy Children</h3>
			</div>
			<img src='./src/assets/img/logo.jpg' alt='Logo' />
		</div>
	);
};

export default SiteLogo;
