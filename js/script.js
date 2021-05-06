// MY FUNCTION ____________________________________
// creazione random number 
function getRandomNumber (min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
}
// verifica presenza di element all'interno di array
function isInArray (element, array) {
    var inArray = array.includes(element);
    return inArray;
}


// MY VARIABLES ___________________________________
var maxNumbers = 5; // quanti numeri devono essere creati
var guessNumber; // i 5 numeri creati random
var guessedArray = []; // array vuoto da riempire con i 5 numeri generati
var firstAlert;

// GAME

// 1) alert che fa vedere 5 numeri (array) random generato (function random.)
while (guessedArray.length < 5)  {    
    guessNumbers = getRandomNumber(1, 100);
        if (!isInArray(guessNumbers, guessedArray)) {
        guessedArray.push(guessNumbers);
        }
} 
console.log("Questo è il guessedArray composto dai 5 numeri creati:");
console.log(guessedArray);
//alert di inizio game con visualizzazione dei numeri
firstAlert = alert("Memorizza i seguenti numeri: \n" + guessedArray.join('    '));

// 2) Parte un timer di 30 secondi (da visualizzare in pagina.)
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
var userInput;
var inputArray = [];

setTimeout (timer30, 1000); // dopo 30 secondi mi da 5 prompt di richiesta numero
var check = true;
function timer30() {

    while (inputArray.length < 5) {
       
        userInput = parseInt(prompt("Inserisci qui i numeri che ti ricordi.. se li ricordi!"));
            //
            if (!isInArray(userInput, inputArray)) {
            inputArray.push(userInput);
            }
            
        
        // console.log(inputArray);
    }
    console.log("Questo è l'inputArray dei numeri inseriti dall'utente:")
    console.log(inputArray)
    // si attiva dopo 
    afterTimer();

} // chiusura timer30

// funziona ma stampa per ogni singolo risultato
// setTimeout (timer31, 1100) 
// function timer31() {

//     for (var i=0; i < inputArray.length; i++) {
//         if (isInArray(inputArray[i], guessedArray)) {
//             // l'utente ha indovinato un numero
//             alert("Complimenti ti sei ricordato il numero " + inputArray[i])
//             console.log("Stampa dei numeri ricordati: " + inputArray[i])
            
//         } else {
//             alert("Mi spiace, il numero " + inputArray[i] + " non era nella lista da memorizzare.")
//             console.log("Stampa dei numeri errati: " + inputArray[i])
//         }
//     }
//     console.log("Console degli input usati " + inputArray)
// } //chiusura timer31
var rightArray = [];
var wrongArray = [];

function afterTimer() {

    for (var i=0; i < inputArray.length; i++) {

        // se l'utente ha indovinato un numero
        if (isInArray(inputArray[i], guessedArray)) {
            rightArray.push(inputArray[i]);
            // alert("Complimenti ti sei ricordato il numero " + inputArray[i])
            console.log("Console dei numeri azzeccati: " + rightArray);
            
        } else { // l'utente non ha azzeccato il numero
            wrongArray.push(inputArray[i]);
            // alert("Mi spiace, il numero " + inputArray[i] + " non era nella lista da memorizzare.")
            console.log("Console dei numeri sbagliati " + wrongArray);
        }
    }
    console.log("Console degli input usati: " + inputArray)
    console.log("Console dei numeri azzeccati: " + rightArray)
    console.log("Console dei numeri sbagliati: " + wrongArray)
    
} //chiusura timer31


    // "hai indovinato 3 numeri"



// 3) Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
