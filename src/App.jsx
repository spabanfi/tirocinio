import React from "react";
import "./assets/css/App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Link } from "react-router-dom";

const App = () => {
	return (
		<>
			<Header />

			<div className='container'>
				<div>
					<img
						src='./src/assets/img/cartoon-happy-school.jpg'
						alt='bambini a scuola'
					/>
				</div>

				<div className='content'>
					<h2>
						Sostieni la nostra scuola: investi nel Futuro dei nostri studenti
					</h2>
					<p>
						Cari genitori, insegnanti e membri della comunità,
						<br /> Siamo qui per parlare dell'importanza di sostenere la nostra
						scuola non solo nei suoi compiti didattici, ma anche attraverso
						progetti extra scolastici che arricchiscono l'esperienza educativa
						dei nostri studenti. Mentre la formazione accademica è fondamentale,
						riconosciamo che ciò che accade al di fuori delle aule è altrettanto
						cruciale per lo sviluppo completo di un giovane individuo. I
						progetti extra scolastici, come laboratori LEGO, mostre interattive
						e altre attività creative, offrono agli studenti l'opportunità di
						esplorare nuovi interessi, sviluppare abilità pratiche e stimolare
						la loro creatività. Queste esperienze non solo arricchiscono il
						curriculum scolastico, ma anche promuovono la collaborazione, la
						risoluzione dei problemi e l'autostima degli studenti. Tuttavia, per
						offrire queste opportunità preziose, abbiamo bisogno del sostegno
						della nostra comunità. I fondi raccolti attraverso donazioni ci
						consentiranno di finanziare materiali didattici, attrezzature e
						personale necessari per portare avanti questi progetti. Ogni
						contributo, grande o piccolo, fa la differenza e ci avvicina al
						nostro obiettivo di fornire un'educazione completa e stimolante per
						i nostri studenti. Sostenere la nostra scuola non è solo un
						investimento nel presente, ma anche nel futuro dei nostri giovani.
						Con il vostro sostegno, possiamo continuare a ispirare e preparare i
						nostri studenti per affrontare sfide e opportunità in un mondo
						sempre più complesso e dinamico. Grazie per aver considerato di
						sostenere la nostra scuola e i nostri studenti. Insieme, possiamo
						fare la differenza.
						<br /> Cordiali saluti, <br /> Un genitore
					</p>
				</div>
			</div>
			<div className='container2'>
				<div className='content2'>
					<p>
						Ci rivolgiamo a voi oggi per chiedere il vostro prezioso supporto
						nel sostenere i laboratori dei nostri ragazzi. Questi spazi creativi
						e interattivi sono fondamentali per l'apprendimento esperienziale e
						lo sviluppo delle competenze essenziali per il futuro dei nostri
						giovani. I laboratori offrono agli studenti l'opportunità di
						sperimentare, esplorare e apprendere in modi che vanno al di là
						delle tradizionali lezioni in aula. Ecco perché è così importante
						che ognuno di noi contribuisca a mantenere e migliorare questi
						preziosi ambienti di apprendimento. Ecco alcuni motivi per cui il
						vostro aiuto è essenziale: Sviluppo delle Competenze: I laboratori
						consentono agli studenti di acquisire competenze pratiche e tecniche
						attraverso l'applicazione pratica dei concetti appresi in classe.
						Queste competenze sono fondamentali per preparare i nostri ragazzi
						per successo accademico e professionale.
					</p>
					<video
						className='video'
						controls
						src='./src/assets/img/video.mp4'
						type='video/mp4'></video>

					<div>
						<Link to='/donazioni'>
							<button>Dona</button>
						</Link>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default App;
