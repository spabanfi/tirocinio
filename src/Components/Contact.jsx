import React from "react";
import "../assets/css/Contact.css";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

const Contact = () => {
	return (
		<>
			<Header></Header>

			<div className='form-container'>
				<h1>Contattaci</h1>
				<form action='/submit_form' method='post'>
					<div>
						<label htmlFor='firstName'>Nome:</label>
						<input type='text' id='firstName' name='firstName' required />
					</div>
					<div>
						<label htmlFor='lastName'>Cognome:</label>
						<input type='text' id='lastName' name='lastName' required />
					</div>
					<div>
						<label htmlFor='phone'>Telefono:</label>
						<input type='tel' id='phone' name='phone' required />
					</div>
					<div>
						<label htmlFor='email'>Email:</label>
						<input type='email' id='email' name='email' required />
					</div>
					<div>
						<label htmlFor='question'>Domanda:</label>
						<textarea
							id='question'
							name='question'
							rows='4'
							required></textarea>
					</div>
					<button type='submit'>Invia</button>
				</form>
			</div>

			<Footer></Footer>
		</>
	);
};

export default Contact;
