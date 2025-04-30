// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.

function somma(num1, num2) {

    return (
        num1 + num2
    )

}

console.log(somma(2, 6));

// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile

let sommanumeri = function (num1, num2) {
    return num1 + num2;
};

console.log(sommanumeri(1, 2));

// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions

let sommanumeriarrow = (num1, num2) => {
    return num1 + num2;
};

console.log(sommanumeriarrow(3, 4));
