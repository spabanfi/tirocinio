import React from "react";
import "../assets/css/Investimenti.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Investimenti() {
	// Funzione per generare una percentuale fittizia di donazioni
	const generaPercentuale = () => {
		return Math.floor(Math.random() * 101); // Genera un numero casuale tra 0 e 100
	};
	return (
		<>
			<Header />

			<h1>I nostri investimenti</h1>
			<div className='container'>
				<div className='investment'>
					<h2>Progetto Scacchi</h2>
					<div className='flex-container'>
						<img
							src='./src/assets/img/kids-playing-chess.jpg'
							alt='Scacchi'
							className='investment-img'
						/>
						<p>
							I fondi per questo investimento verranno utilizzati per acquistare
							scacchiere e set completi di pezzi, al fine di promuovere
							l'apprendimento e la pratica degli scacchi tra gli studenti.
							Questo progetto mira a sviluppare abilità cognitive e strategiche.
						</p>
						<p className='perce'>{generaPercentuale()}% completato</p>
					</div>
				</div>

				<div className='investment'>
					<h2>Progetto Lego</h2>
					<div className='flex-container'>
						<p>
							Con questo investimento, la scuola intende acquistare una vasta
							gamma di kit Lego per stimolare la creatività e la capacità di
							risolvere problemi dei suoi studenti. I mattoncini Lego saranno
							utilizzati per attività educative e progetti di costruzione.
						</p>
						<img
							src='./src/assets/img/bimbi.jpg'
							alt='Lego'
							className='investment-img'
						/>
						<p className='perce'>{generaPercentuale()}% completato</p>
					</div>
				</div>

				<div className='investment'>
					<h2>Labo Linguistico</h2>
					<div className='flex-container'>
						<img
							src='./src/assets/img/labolinguistico.jpg'
							alt='Laboratorio Linguistico'
							className='investment-img'
						/>
						<p>
							Il laboratorio linguistico sarà un'area dedicata all'apprendimento
							delle lingue straniere con docenti madrelingua. Gli investimenti
							saranno destinati all'acquisto di risorse multimediali, libri,
							software,hardware, tablet e materiale didattico per migliorare le
							competenze linguistiche e la sicurezza linguistica degli studenti.
						</p>

						<p className='perce'>{generaPercentuale()}% completato</p>
					</div>
				</div>

				<div className='investment'>
					<h2>Progetto puzzle</h2>
					<div className='flex-container'>
						<p>
							Questo investimento sarà utilizzato per acquisire una varietà di
							puzzle di diverse dimensioni e complessità, per promuovere il
							pensiero critico e la risoluzione dei problemi tra gli studenti. I
							puzzle saranno utilizzati come attività ricreative e educative per
							sviluppare la concentrazione e la collaborazione.
						</p>
						<img
							src='./src/assets/img/puzzlebimbi.jpg'
							alt='Puzzle'
							className='investment-img'
						/>

						<p className='perce'>{generaPercentuale()}% completato</p>
					</div>
				</div>
			</div>
			<div>
				<p class='donation-p'>
					Se sei interessato a sostenere questi progetti e contribuire al
					miglioramento dell'esperienza educativa dei nostri studenti, considera
					di fare una donazione. Ogni contributo, grande o piccolo, fa la
					differenza e ci permette di realizzare più rapidamente i nostri
					obiettivi. Grazie per il tuo sostegno!
				</p>
			</div>
			<div>
				<Link to='/donazioni'>
					<button>Dona</button>
				</Link>
			</div>

			<Footer />
		</>
	);
}

export default Investimenti;
