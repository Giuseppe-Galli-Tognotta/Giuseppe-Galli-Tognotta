//operatori logivi: and, or, not
//servono ad ottenere una condizione di piu operatori

//1)and (&&): serve ad estrapolare 1 sottodominio da un dominio.
//ES. 1 2 3 [4 5 6] 7 8 9 10
//and da vero se tutte le condizioni sono vere
//condizione1    condizione2  risultato
//vero           //vero        //vero
//vero           //falso       //falso
//falso          //vero        //falso
//falso          //falso       //falso



//1)or(||): serve ad estrapolare piu sottodominio da un dominio.
//ES. 1 2 3] 4 5 6 7 [8 9 10
//or da vero se almeno una condizione è vere
//condizione1    condizione2  risultato
//vero           //vero        //vero
//vero           //falso       //vero
//falso          //vero        //vero
//falso          //falso       //falso



//1)not(!): serve a negare il risultato.
//ES. 1 2 3 4 5 6 7 [8 9 10
//or da vero se almeno una condizione è vere
//condizione1   risultato
//vero          //falso
//falso         //vero


var input = require("readline-sync");
do {
    menu();
    var scelta = parseInt(input.question("scegli la tua destinazioone"));
    switch (scelta) {
        case 1:
            OperatoreAnd();//chiamo una funzione javascript
            break
        case 2:
            OperatoreOr();//chiamo una funzione javascript
            break
        case 3:
            OperatoreNot();//chiamo una funzione javascript
            break
    }
}
while (scelta != 10)
console.log("arrivederci")

function menu() {
    console.log("1)operatore And")
    console.log("2)operatore or")
    console.log("2)operatore not")
}
//and
function OperatoreAnd() {
    for (var count = 1; count <= 10; count++)
        if (count > 3 && count < 8) {
            console.log(count);
        }
}
//or
function OperatoreOr() {
    for (var count = 1; count <= 10; count++)
        if (count <= 3 || count >= 8) {
            console.log(count);
        }
}
//not
function OperatoreNot() {
    for (var count = 1; count <= 10; count++)
        if (!(count<7)) {
            console.log(count);
        }
}

