var input = require("readline-sync");
var scelta = 0;
do{
    console.log("####MENU####");
    console.log("1) Opzione 1");
    console.log("2) Opzione 2");
    console.log("3) Opzione 3");
    console.log("4) Esci");
    console.log("############");
    scelta = parseInt(input.question("Scegli un'opzione: "));
    switch (scelta) {
        case 1:
            console.log("Opzione 1");
            input.question("Premere un tasto per continuare: ");
            break;
        case 2:
            console.log("Opzione 2");
            input.question("Premere un tasto per continuare: ");
            break;
        case 3:
            console.log("Opzione 3");
            input.question("Premere un tasto per continuare: ");
            break;
        case 4:
            console.log("Programma terminato! Alla prossima!");
            break;
        default:
            console.log("Operazione non contemplata!");
    }
    
}
while(scelta!=4);
