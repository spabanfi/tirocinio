import React from "react";
import "../assets/css/About.css"; // Importa il file CSS per lo stile della Home
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const About = () => {
	return (
		<>
			<Header></Header>

			<h2 className='tit'>Benvenuti nel nostro mondo educativo!</h2>
			<div className='insegnanti'>
				<img src='./src/assets/img/insegnanti.jpg' alt='insegnanti'></img>
				<p>
					Siamo un team di appassionati educatori e professionisti dedicati a
					plasmare il futuro attraverso l'istruzione. Presso la nostra scuola,
					ci impegniamo a creare un ambiente inclusivo, stimolante e accogliente
					che ispiri gli studenti a raggiungere il loro pieno potenziale. La
					nostra missione è fornire un'educazione di alta qualità che sia equa,
					accessibile e orientata al successo degli studenti. Crediamo
					fermamente nel potere trasformativo dell'apprendimento e lavoriamo
					instancabilmente per offrire opportunità educative che aprano le porte
					a un mondo di possibilità. Ci distinguiamo per il nostro approccio
					all'apprendimento, che valorizza la creatività, la curiosità e la
					collaborazione. Oltre alla formazione accademica, ci impegniamo a
					sviluppare le capacità socio-emotive e il pensiero critico dei nostri
					studenti, preparandoli non solo per eccellere nelle sfide del domani,
					ma anche per diventare cittadini responsabili e compassati. Siamo
					grati per l'opportunità di far parte della vita dei nostri studenti e
					delle loro famiglie, e ci impegniamo a fornire un ambiente sicuro,
					nutriente e supportivo in cui ogni individuo possa crescere e
					prosperare. Unisciti a noi nel nostro viaggio verso l'eccellenza
					educativa e verso la creazione di un mondo migliore per le generazioni
					future. Grazie per aver scelto di essere parte della nostra comunità
					educativa.
				</p>
			</div>
			<Footer />
		</>
	);
};

export default About;
