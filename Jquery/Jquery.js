/*$("#Scompari").click(function () {
    $("#cont-Form").css("display", "none")
});

$("#Appari").click(function () {
    $("#cont-Form").css("display", "block")
});*/

$("#Appari").click(function () {
    $("#cont-Form").slideDown();
});

$("#Scompari").click(function () {
    $("#cont-Form").slideUp();
});
function SottoIscrizione() {
    var regex_nome_cognome = /^[a-zA-Z]{2,}$/g;
    var regex_codiceFiscale = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/i;
    var regex_indirizzo = /^[a-zA-Z ]{10,}$/g;

}
