function MudarFormatacao (i)
{
    var elemento = document.getElementById("MeuTexto");

    if(i == 1)
    {
        elemento.style.color = "Blue";
        elemento.style.backgroundColor = "white";
    }
    else if (i == 2)
    {
        elemento.style.color = "White";
        elemento.style.backgroundColor = "Black";
    }
}