// JavaScript source code
var a = prompt("Informe o valor: ");

if (a == 0) {
    alert("O numero informado foi 0");
}
else {
    alert("O numero informado nao foi 0");
}

if (a === 10) {
    alert("O valor informado foi 10, validacao === Sem parseInt");
}
else if (parseInt(a) === 15) {
    alert("O valor informado foi 15, validacao ===");
}
else {
    alert("Nao sei o que foi informado...");
}