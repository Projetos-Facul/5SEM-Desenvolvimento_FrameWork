function Calcular()
{
    var Valor = document.getElementById("txtValor");
    var Dias = document.getElementById("txtDias");
    var porCento = 0;

    Dias = parseInt(Dias.value);
    Valor = parseInt(Valor.value);
    
    if(Dias<=15 & Dias>0)
    {
        porCento=10;
        Multa=Valor*.1;
    }
    else if (Dias>15)
    {
        porCento=15;
        Multa=Valor*.15;
    }
    
    alert("Valor a pagar................: " + (Valor+Multa) + 
          "\nValor da multa.............: " + Multa + "  (" + porCento + "%)" +
          "\nQuantidades de dias.: " + Dias);
}