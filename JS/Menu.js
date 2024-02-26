/*sviluppiamo un menù con lo switc case*/
/*Switch(scelta) 
case 1: //opzione
case N: opzione enneseima
defoult: // veine letto quando il valore non corrisponde ad un case*/
var input = require("readline-sync");
var scelta = parseInt(input.question ("scegli un'opzione"));

switch (scelta) {
    case 1:
        console.log("Opzione 1");
        break
    case 2:
        console.log("Opzione 2");
        break
    case 3:
        console.log("Opzione 3");
        break
    default:
        console.log("Opzione di default");
        break

}

