/*"readline-sync" è uno strumento del pacchetto di node js che ci permette di far leggere dal terminale una
 stringa, e questa stringa una volta che viene lette puo essere assegnata a una variabile*/
var input =require("readline-sync");
var coloreLuce = input.question("inserisci colore");

if(coloreLuce=="verde"){
    console.log("Puoi andare");
    }
    else if(coloreLuce=="giallo"){
    console.log("Attenzione rallenta");
    }
    else if(coloreLuce=="rosso"){
    console.log("Fermati");
    }