/* Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti. Esegui questo programma in due versioni, con il for
e con il while */


// FOR
var fSomma = 0;
for (var i = 0; i < 2; i++) {
  fNumeri = parseInt(prompt("Inserisci un numero Ciclo For"));
  fSomma += fNumeri;
}
console.log(fSomma);
// /FOR
