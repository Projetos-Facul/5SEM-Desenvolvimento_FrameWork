var Compra = prompt("Valor da Compra: ");

CalcularDesconto(Compra)

function CalcularDesconto (Valor)
{
    if (Valor < 200)
    {
        Desconto = 5;
    }
    else if (Valor < 500)
    {
        Desconto = 8;
    }
    else if (Valor >= 500)
    {
        Desconto = 10;
    }
    Valor = Valor - (Valor*(Desconto/100));

    alert("Desconto...: " + Desconto + "\n" + "Valor Final..: " + Valor);
}