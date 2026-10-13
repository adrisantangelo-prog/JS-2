/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Oggetto persona
   Crea un oggetto 'persona' con: nome, cognome, eta, citta.
   Stampa: 'Mario Rossi, 25 anni, vive a Roma.'
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const persona = {
   nome: 'Mario',
   cognome: 'Rossi',
   eta: 25,
   citta: 'Roma'
}

console.log(`${persona.nome} ${persona.cognome}, ${persona.eta} anni, vive a ${persona.citta}.`);


/* ESERCIZIO 2 — Aggiungi e rimuovi
   Sull'oggetto 'persona': aggiungi 'email', poi rimuovi 'eta'.
   Stampa l'oggetto risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

persona.email = 'mario.rossi@email.com';
delete persona.eta;

console.log(`${persona.nome} ${persona.cognome}, ${persona.email}, vive a ${persona.citta}.`);


/* ESERCIZIO 3 — Oggetto annidato
   Oggetto 'utente' con una proprietà 'indirizzo' (oggetto con via, citta, cap).
   Stampa solo il CAP con dot notation.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const utente = {
   nome: 'Luca',
   cognome: 'Bianchi',
   indirizzo: {
      via: 'Via Roma 10',
      citta: 'Milano',
      cap: '20100'
   }
}

console.log(`CAP ${utente.indirizzo.cap}`);

/* ESERCIZIO 4 — Bracket dinamica
   Sull'oggetto 'persona', variabile chiave = 'nome'.
   Stampa il valore con bracket notation usando la variabile chiave.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

persona.nome = 'Luca';
const chiave = 'nome';

console.log(persona[chiave]);

/* ESERCIZIO 5 — Numero più grande
   Tre numeri a, b, c.
   Con if/else if, stampa il più grande. Se pareggio al massimo, stampa 'Pareggio'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 10;
let b = 20;
let c = 25;

if (a > b && a > c) {
   console.log(`Il numero più grande è: ${a}`);
} else if (b > a && b > c) {
   console.log(`Il numero più grande è: ${b}`);
} else if (c > a && c > b) {
   console.log(`Il numero più grande è: ${c}`);
} else {
   console.log('Pareggio');
}

/* ESERCIZIO 6 — E-commerce: spedizione
   Variabile 'totale'.
   Se totale >= 50 spedizione gratuita, altrimenti 9.90.
   Stampa: 'Totale carrello: 35€ — Spedizione: 9.90€ — Totale finale: 44.90€'
   Risolvi una volta con if/else e una volta con ternario.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totale = 35;
let spedizione = totale >= 50 ? 0 : 9.90; //operatore ternario
let finale = totale + spedizione;

console.log(`Totale carrello: ${totale}€ — Spedizione: ${spedizione}€ — Totale finale: ${finale}€`);

if (totale >= 50) {
   console.log(`Totale carrello: ${totale}€ — Spedizione: 0€ — Totale finale: ${totale}€`);
} else {
   console.log(`Totale carrello: ${totale}€ — Spedizione: 9.90€ — Totale finale: ${finale}€`);
}

/* ESERCIZIO 7 — typeof check
   Crea un array con 3 valori diversi (es. [42, 'ciao', true]).
   Con un for + if, per ogni elemento stampa 'x è un numero' o 'x non è un numero'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const misto = [42, 'ciao', true];

for (let i = 0; i < misto.length; i++) {
   if (typeof misto[i] === 'number') {
      console.log(`${misto[i]} è un numero`);
   } else {
      console.log(`${misto[i]} non è un numero`);
   }
}

/* ESERCIZIO 8 — Array dei numeri
   Array vuoto. Aggiungi 1..5 con push. Aggiungi 0 all'inizio con unshift.
   Stampa array e length.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numeri = [];
numeri.push(1);
numeri.push(2);
numeri.push(3);
numeri.push(4);
numeri.push(5);
numeri.unshift(0); 

console.log(numeri);
console.log(`Lunghezza dell'array: ${numeri.length}`);


/* ESERCIZIO 9 — Carrello con splice
   Array ['Penna', 'Quaderno', 'Zaino', 'Astuccio'].
   Con splice: rimuovi 'Quaderno', poi inserisci 'Diario' al suo posto.
   Stampa dopo ogni operazione.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const carrello = ['Penna', 'Quaderno', 'Zaino', 'Astuccio'];

carrello.splice(1, 1, 'Diario');
console.log(carrello);

/* ESERCIZIO 10 — Cerca un articolo
   Array prodotti = ['Penna', 'Quaderno', 'Zaino'].
   cercato = 'Zaino'.
   Con includes: stampa 'Zaino è in carrello: true'.
   Con indexOf: stampa la posizione, o 'Non in carrello'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const prodotti = ['Penna', 'Quaderno', 'Zaino'];
const cercato = 'Zaino';

console.log('Zaino è in carello:' + prodotti.includes('Zaino'));

if (prodotti.indexOf('Zaino') !== -1) {
   console.log(`Zaino è in carrello: ${prodotti.indexOf('Zaino')}`);
} else {
   console.log('Non in carrello');
}

/* ESERCIZIO 11 — Lista utenti
   Array utenti di 3 oggetti { nome, eta }.
   Con un for, stampa ogni utente: 'Mario (25 anni)'.
   Aggiungi console.table(utenti) alla fine.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const listaUtenti = [
   { nome: 'Mario', eta: 25 },
   { nome: 'Anna', eta: 30 },
   { nome: 'Luca', eta: 22 }
];

for (let i = 0; i < listaUtenti.length; i++) {
   console.log(`${listaUtenti[i].nome} (${listaUtenti[i].eta} anni)`);
}

console.table(listaUtenti);

/* ESERCIZIO 12 — Inventario disponibili
   Array prodotti di 4 oggetti { nome, prezzo, disponibile }.
   Con for, per ogni prodotto:
   - disponibile && prezzo < 10 → 'OFFERTA: nome (prezzo€)'
   - disponibile && prezzo >= 10 → 'nome — prezzo€'
   - !disponibile → 'nome — esaurito'
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* --EXTRA-- ESERCIZIO 13 — Reverse manuale
   Array [1, 2, 3, 4, 5].
   Nuovo array 'inverso', riempilo con un for (dall'ultimo al primo) usando push.
   Stampa 'inverso'.
   Vincolo: niente metodo .reverse() di JavaScript.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
