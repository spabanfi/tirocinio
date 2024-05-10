import React, { useState } from "react";
import "../assets/css/Donazioni.css";
import Header from "./Header";
import Footer from "./Footer";

const Donazioni = () => {
	const [taglioDonazione, setTaglioDonazione] = useState(""); // Definisci uno stato per gestire il taglio della donazione selezionato
	const [ammontareTotale, setAmmontareTotale] = useState(0); // Definisci uno stato per l'ammontare totale delle donazioni
	const [privacyAccettata, setPrivacyAccettata] = useState(false); // Stato per memorizzare l'accettazione della privacy

	// Gestisci il cambio del taglio della donazione
	const handleChange = (e) => {
		setTaglioDonazione(e.target.value);
	};

	// Gestisci l'invio del form
	const handleSubmit = (e) => {
		e.preventDefault();
		if (privacyAccettata) {
			// Calcola l'ammontare totale aggiungendo la donazione corrente all'ammontare totale esistente
			const nuovaDonazione = parseInt(taglioDonazione);
			const nuovoAmmontareTotale = ammontareTotale + nuovaDonazione;
			setAmmontareTotale(nuovoAmmontareTotale);

			// Qui puoi gestire ulteriori operazioni, ad esempio inviare i dati a un server
			console.log("Taglio donazione selezionato:", taglioDonazione);
			console.log("Ammontare totale delle donazioni:", nuovoAmmontareTotale);

			// Pulisci il campo del taglio della donazione dopo l'invio
			setTaglioDonazione("");
		} else {
			// Avvisa l'utente di accettare la privacy
			alert("Devi accettare la privacy per procedere con la donazione.");
		}
	};

	// Funzione per gestire il cambio di accettazione della privacy
	const handlePrivacyChange = () => {
		setPrivacyAccettata(!privacyAccettata); // Cambia lo stato quando viene cliccato
	};

	return (
		<>
			<Header />
			<h1>Donazioni</h1>
			<main>
				{/* Form per il taglio della donazione */}
				<form onSubmit={handleSubmit}>
					<fieldset>
						<legend>Seleziona o inserisci l'importo della donazione:</legend>
						<label>
							Seleziona il taglio della donazione:
							<select value={taglioDonazione} onChange={handleChange}>
								<option value=''>Seleziona...</option>
								<option value='5'>€5</option>
								<option value='10'>€10</option>
								<option value='20'>€20</option>
								<option value='50'>€50</option>
							</select>
						</label>
						<label>
							Oppure inserisci l'importo della donazione:
							<input
								type='number'
								value={taglioDonazione}
								onChange={handleChange}
								min='1' // Importo minimo consentito
								step='1' // Incremento/decremento minimo
								required // Campo obbligatorio
							/>
						</label>
					</fieldset>
				</form>

				{/* Form per i dettagli della donazione */}
				<form onSubmit={handleSubmit}>
					{/* Nome */}
					<label htmlFor='firstName'>Il tuo nome</label>
					<input type='text' name='firstName' />

					{/* Cognome */}
					<label htmlFor='lastName'>Il tuo cognome</label>
					<input type='text' name='lastName' />

					{/* Email */}
					<label htmlFor='email'>La tua email</label>
					<input type='email' name='email' />

					{/* Donazione anonima */}
					<legend>Vuoi rendere la tua donazione anonima?</legend>
					<label>
						<input type='radio' name='anonima' value='true' required />
						Si
					</label>
					<label>
						<input type='radio' name='anonima' value='false' />
						No
					</label>
				</form>

				{/* Form per il metodo di pagamento */}
				<form onSubmit={handleSubmit}>
					<fieldset>
						<legend>Come preferisci fare la tua donazione:</legend>
						<label>
							<input type='radio' name='metodoPagamento' value='paypal' />
							PayPal
						</label>
						<label>
							<input type='radio' name='metodoPagamento' value='carte' />
							Carte di credito/debito
						</label>
						<label>
							<input type='radio' name='metodoPagamento' value='satispay' />
							Satispay
						</label>
						<button type='submit'>Dona</button>
					</fieldset>
				</form>
				<div className='Priv-cont'>
					{/* Div per l'accettazione della privacy */}
					<div className='privacy'>
						<h2>Privacy Policy</h2>
						<label>
							<input
								type='checkbox'
								checked={privacyAccettata}
								onChange={handlePrivacyChange}
							/>
							Ho letto e accetto i termini dell’Informativa sul trattamento dei
							dati (Conferma per proseguire)
						</label>
					</div>
				</div>
				{/* Visualizza l'ammontare totale delle donazioni */}
				<div className='donaz'>
					<p>Ammontare totale delle donazioni: €{ammontareTotale}</p>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Donazioni;
