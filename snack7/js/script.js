/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
*/

function nRandom(){
  return Math.floor(Math.random() * 100) + 1;
}

var squadre = [
  {
    nome : "Pippo",
    puntiSegnati: 0,
    falliSubiti: 0
  },
  {
    nome : "Pluto",
    puntiSegnati: 0,
    falliSubiti: 0
  },
  {
    nome : "Franco",
    puntiSegnati: 0,
    falliSubiti: 0
  }
];


/* Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */
var squadreNuova = [];
var squadra = "";
for (var i = 0; i < squadre.length; i++) {
  squadre[i].puntiSegnati = nRandom();
  squadre[i].falliSubiti = nRandom();
  squadra = squadre[i].nome + " " + squadre[i].falliSubiti;
  squadreNuova.push(squadra);
}

console.log(squadre);
console.log(squadreNuova);
