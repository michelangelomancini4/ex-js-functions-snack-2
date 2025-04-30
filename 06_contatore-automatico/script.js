// Crea un contatore automatico con setInterval

// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval,
//  incrementando un contatore e stampandolo.


function creaContatoreAutomatico() {

    console.log('Avvio conteggio fino a 5');


    let contatore = 0;

    return function avvioContatore() {

        const intervallo = setInterval(() => { contatore++; console.log(contatore); }, 1000);

        setTimeout(() => {
            clearInterval(intervallo);
            console.log("Stop conteggio!");
        }, 5000);
    }


}
const start = creaContatoreAutomatico();
start();

