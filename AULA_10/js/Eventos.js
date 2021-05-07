function CliquedoBotao1()
{
    alert("Cliquei no botao 1");
}

function CliquedoBotao2(Texto)
{
    alert("Evento: " + Texto);
}

function Soma()
{
    var Valor1 = document.getElementById("txtValor1");
    var Valor2 = document.getElementById("txtValor2");

    alert(parseInt(Valor1.value) + parseInt(Valor2.value));
}

function Subtracao()
{
    var Valor1 = document.getElementById("txtValor1");
    var Valor2 = document.getElementById("txtValor2");

    alert(parseInt(Valor1.value) - parseInt(Valor2.value));
}
function Multiplicacao()
{
    var Valor1 = document.getElementById("txtValor1");
    var Valor2 = document.getElementById("txtValor2");

    alert(parseInt(Valor1.value) * parseInt(Valor2.value));
}
function Divisao()
{
    var Valor1 = document.getElementById("txtValor1");
    var Valor2 = document.getElementById("txtValor2");

    alert(parseInt(Valor1.value) / parseInt(Valor2.value));
}