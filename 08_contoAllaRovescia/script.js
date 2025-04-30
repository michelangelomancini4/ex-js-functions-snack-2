// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0,
//  con un intervallo di 1 secondo tra ogni numero.
//  Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.


function contoAllaRovescia(n) {
    const intervallo = setInterval(() => {
        console.log(n);
        n--;

        if (n < 0) {
            clearInterval(intervallo);
            console.log("Tempo scaduto!");
        }
    }, 1000);
}

contoAllaRovescia(5);
