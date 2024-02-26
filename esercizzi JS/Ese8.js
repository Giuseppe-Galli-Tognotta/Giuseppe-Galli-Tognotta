var input =require("readline-sync");
console.log("####MENU####");
console.log("1) Semaforo Verde");
console.log("2) Semaforo Giallo");
console.log("3) Semaforo Rosso");
console.log("4) Esci");
do{
    var coloreLuce= parseInt(input.question("inserisci numero"));
    switch(coloreLuce){
        case 1:;
            console.log("verde cammina");
            input.question("Premere un tasto per continuare: ");
        break;

        case 2:
            console.log("giallo rallenta");
            input.question("Premere un tasto per continuare: ");
        break;

        case 3:
            console.log("rosso ferma");
            input.question("Premere un tasto per continuare: ");
        break;

        case 4:
            console.log("Programma terminato! Alla prossima! ");
        break;
    }
} while(coloreLuce !=4)
 
