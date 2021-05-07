function CalcularDesconto()
{
    var Nome = document.getElementById("txtNome");
    var ValorInicial = document.getElementById("txtValor");

    if(Nome.value == "")
    {
        alert("Preencha o campo Nome");
    }
    else if (ValorInicial.value <= 0)
    {
        alert("Preencha o campo do valor com um dado valido");
    }
    else
    {
        Valor = parseInt(ValorInicial.value);

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

        alert("O Valor Gasto por " + Nome.value + " foi de " + Valor);
    }
}