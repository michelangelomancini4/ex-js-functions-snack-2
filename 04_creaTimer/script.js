// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer(time) {

    return function startTimeOut() {

        console.log('Avvio Timeout di 3 secondi..');

        setTimeout(() => {
            console.log('Tempo scaduto!');
        }, time)
    }
}

creaTimer(3000)(); 
