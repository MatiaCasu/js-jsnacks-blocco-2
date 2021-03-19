/* Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore */

var listaBici = [
  {
    nome: "Graziella",
    peso: 8000
  },
  {
    nome: "Bici",
    peso: 3000
  },
  {
    nome: "Bici",
    peso: 5000
  },
];

var biciLeggerissima = listaBici[0];

for(var i = 0; i < listaBici.length; i++) {
  if(listaBici[i].peso < biciLeggerissima.peso  ){
    biciLeggerissima = listaBici[i];
  }
}
console.log(biciLeggerissima);
