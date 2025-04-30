// Crea una funzione che ferma un timer dopo un certo tempo

// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop.
//  Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.


function eseguiEferma(message, startTime, stopTime) {


    console.log('Avvio timer :');


    setTimeout(() => {
        const intervallo = setInterval(() => {
            console.log(message);
        }, 1000);


        setTimeout(() => {
            clearInterval(intervallo);
            console.log("Tempo scaduto : " + stopTime / 1000 + " secondi!");
        }, stopTime);
    });
}

eseguiEferma('ciao :)', 2000, 5000)