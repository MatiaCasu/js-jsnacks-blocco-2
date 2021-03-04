/*Inserisci un numero, se è pari stampa il numero, se è dispari
stampa il numero successivo.*/

var n = parseInt(prompt("inserisci numero!"));

if(n % 2 == 0){
  console.log(n + 1);
}
else{
  console.log("Non è un numero pari!");
}
