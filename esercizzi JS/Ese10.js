var input = require("readline-sync");
var inizio = parseInt(input.question("inserisci numero inziale:"));
var fine = parseInt(input.question("inserisci numero finale:"));
if (inizio < fine) {
    for (var conta = inizio; conta <= fine; conta++) {
        console.log(conta)
    }
}
else if (inizio > fine) {
    for (var conta = inizio; conta >= fine; conta--) {
        console.log(conta);
    }
}
else {
    console.log("conta impossibile");
}