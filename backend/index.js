const express = require("express");
const { Pool } = require("pg");

const app = express();
const PORT = 3000;

// Credenziali di accesso al database
const pool = new Pool({
	user: "mituz",
	host: "localhost:3000",
	database: "donazioni",
	password: "883mituz",
	port: 5432, // Porta di default per PostgreSQL
});

// Gestione della route di esempio
app.get("/", async (req, res) => {
	try {
		// Esegui una query di esempio al database
		const result = await pool.query("SELECT * FROM nome_tabella");
		res.json(result.rows); // Invia i risultati come risposta JSON
	} catch (error) {
		console.error("Errore durante l'esecuzione della query:", error);
		res.status(500).json({ error: "Errore durante l'esecuzione della query" });
	}
});

// Avvia il server
app.listen(PORT, () => {
	console.log(`Server backend in esecuzione su http://localhost:${PORT}`);
});
