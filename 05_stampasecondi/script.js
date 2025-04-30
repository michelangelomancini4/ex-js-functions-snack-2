// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.


function stampaOgniSecondo() {

    console.log('Avvio Timeout di 5 secondi..');

    const interval = setInterval(() => {
        console.log("Hello amico mio!");
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
        console.log("Stop Timeout di 5 secondi.");
    }, 5000);

}

stampaOgniSecondo();


