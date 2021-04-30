var continuar="S";

while(continuar=="S")
{
    var N1 = prompt("Informe a NOTA 1: ");
    var N2 = prompt("Informe a NOTA 2: ");

    N1=N1*0.4;
    N2=N2*0.6;

    var Media=N1+N2;

    alert("Media: " + Media);

    continuar = prompt("CONTINUAR [S/N]: ");
}
