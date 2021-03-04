/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

var frutta = ["mela", "pera", "fragola", "limone"];
var verdura = ["cipolla", "carote", "cavolo", "broccoli", "patate", "zucchine"];

do{
  var addVerdura = prompt("Inserisci verdura. Digita Stop per smetter di aggiungere");
  addVerdura = addVerdura.toLowerCase();
  verdura.push(addVerdura);
}
while(addVerdura !== "stop");

console.log("lista originale: " + "(" + frutta.length + ") " + frutta);
console.log(verdura);

do{
nRandom = Math.floor((Math.random() * frutta.length));
var fRandom = frutta[nRandom];
frutta.push(fRandom);
}
while (frutta.length < verdura.length);

console.log(frutta);
