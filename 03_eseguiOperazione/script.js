// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback).
//  La funzione deve eseguire l'operazione fornita sui due numeri.
const somma = (num1, num2) => num1 + num2;
const moltiplica = (num1, num2) => num1 * num2;
const sottrazione = (num1, num2) => num1 - num2;


function eseguiOperazione(num1, num2, callbackOperazione) {

    return callbackOperazione(num1, num2)
}

console.log(eseguiOperazione(2, 5, sottrazione));

