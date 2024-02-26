/*ALGORITMO DEL SEMAFORO*/ 
/*UN ALGORITMO è UNA SEQUENZA DI ISTRUZIONI ATTE A RISOLVERE UN PROBLEMA */
var coloreLuce = "rosso";
/*if sta per "se" e == "sta per confronto" il risultato di ogni confronto è un valore booleano V o F
== confronto di uguaglianza
!= confronto di diseguaglianza
> confronto di maggioranza
>= confronto di maggiore/uguale 
< confronto di minoranza
<= confronto di minore/uguale
*/

/*se il colore luce é == a verde allora esce a video la scritta Puoi andare */
if(coloreLuce=="verde"){
console.log("Puoi andare");
}
else if(coloreLuce=="giallo"){
console.log("Attenzione rallenta");
}
else if(coloreLuce=="rosso"){
console.log("Fermati");
}