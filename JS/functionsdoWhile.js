var input = require("readline-sync");
do {
    menu();
    var scelta = parseInt(input.question("scegli la tua destinazioone"));
    switch (scelta) {
        case 1:
            contaSomma();//chiamo una funzione javascript
            break
        case 2:
            conta();
            break
    }
}
while(scelta!=10)
console.log("arrivederci")

function menu() {
        console.log("1)conta Somma")
        console.log("2)conta")
    }

function conta() {
    for (var conta = 20; conta <= 40; conta++) {
        console.log(conta);
    }
}

function contaSomma() {
    //dichiaro una variabile
    var tot = 0;
    for (var conta = 1; conta <= 10; conta++) {
        tot += conta;
    }
    console.log("totale:" + tot);// con il + si effettua una concatenazione di stringa
}
