/* Crea un array di numeri interi e fai la somma di tutti gli
elementi che sono in posizione dispari.*/
var dispari= 0;
for (var i = 0; i <= 9; i++) {
  var numeri = i;
  if(numeri % 2 === 1){
    dispari += numeri;
  }
  console.log(numeri);
}
console.log("La somma dei numeri dispari è: " + dispari);
