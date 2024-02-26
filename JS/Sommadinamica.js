var input =require("readline-sync");
/*parseFloat() converte una stringa in numero decimale
invece il parseInt() in un numero intero */
var N1 = parseFloat(input.question("inserisci il primo numero:"));
var N2 =  parseFloat(input.question("inserisci il secondo numero:"));
var somma = N1 + N2;
console.log(somma)