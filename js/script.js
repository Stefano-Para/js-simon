// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// MY FUNCTION ____________________________________

function getRandomNumber (min, max) {
    return alert(parseInt(Math.random() * (max - min + 1) + min));
}


// MY VARIABLES ___________________________________


// 1) alert che fa vedere 5 numeri (array) random generato (function random.)