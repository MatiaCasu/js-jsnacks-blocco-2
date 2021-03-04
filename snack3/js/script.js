/* Generatore di “nomi cognomi” casuali: prendendo una lista
di nomi e una lista di cognomi, Gatsby vuole generare una
falsa lista di 3 invitati.*/

var nomi = ["Paolo", "Maria", "Gianna", "Luca"];
var cognomi = ["Casu", "Verdi", "Rossi", "Bianchi"];

var listaRandom;
var ncRandom;

for (var i = 0; i < 3; i++) {
  nRandom = Math.floor((Math.random() * nomi.length));
  cRandom = Math.floor((Math.random() * nomi.length));

  ncRandom = nomi[nRandom] + " " + cognomi[cRandom];

  console.log(ncRandom);
}
