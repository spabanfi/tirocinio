const Pool = require("pg").Pool;
const pool =new Pool({
    user:"postgres",
    host:"localhost",
    database:"demo",
    password:"883mituz",
    port:5432
});

// funzione che interroga il database per selezionare tutti i record
const getStudenti = async() => {
    // PROVO a fare una cosa e vedo come va
    try {
        return await new Promise(function (resolve, reject) {
            pool.query("SELECT * FROM studenti", (error, results) => {
                if (error) {
                    reject(error);
                }
                if(results && results.rows) {
                    resolve(results.rows)
                }
                else {
                    reject(new Error("nessun risultato"));
                }
            })
        })
    }
    // cosa succede se qualcosa non va?
    catch (err) {
        console.error(err);
        throw new Error("Internal server error")
    }
};
