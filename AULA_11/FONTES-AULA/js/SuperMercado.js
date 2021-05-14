$(document).ready(function()
    {
        setInterval(function()
            {
                $("#Titulo").fadeOut(2000);
                $("#Titulo").fadeIn(2000);
            }
        ); 
    }
);

function Calcular ()
{
    var Seco1       = document.getElementById("txtQtdSeco1");
    var Seco2       = document.getElementById("txtQtdSeco2");
    var Molhado1    = document.getElementById("txtQtdMolhado1");
    var Molhado2    = document.getElementById("txtQtdMolhado2");
    var Fragil1     = document.getElementById("txtQtdFragil1");
    var Fragil2     = document.getElementById("txtQtdFragil2");

    if( Seco1.value     == ""   |   Seco2.value     == ""   | 
        Molhado1.value  == ""   |   Molhado2.value  == ""   |
        Fragil1.value   == ""   |   Fragil2.value   == "")
    {
        alert("Preencha todos os campos com no minino 0");
    }
    else
    {
        var resSeco     = Math.ceil(parseInt(Seco1.value)       / parseInt(Seco2.value));
        var resMolhado  = Math.ceil(parseInt(Molhado1.value)    / parseInt(Molhado2.value));
        var resFragil   = Math.ceil(parseInt(Fragil1.value)     / parseInt(Fragil2.value));

        alert ( "Para esta compra deve usar: " + (resSeco+resMolhado+resFragil) + " Sacolas"
                +"\n Sendo: \n        "
                + resSeco       + " para itens secos\n        "
                + resMolhado    + " para itens molhados\n        "
                + resFragil     + " para itens frageis");
    }
}
