$(document).ready(function()
    {
        setInterval(function()
            {
                $("#Titulo").fadeOut(2000);
                $("#Titulo").fadeIn(2000);
            }
        ); 

        $('input[type="text"]').focus(function()
            {
                console.log("Focus");
                Focus(this);
            }
        );

        $('input[type="text"]').blur(function()
            {
                console.log("Blur");
                Blur(this);
            }
        );

        $('#btnCalc').click(function()
            {
                Calcular ();
            }
        );

        $('input[type="text"]').bind('keyup paste', function()
            {
                console.log("OnlyNumber");
                OnlyNumeber(this);
            }
        );
    }
);

function Focus(element)
{
    $("#" + element.id).css("background-color", "black");
    $("#" + element.id).css("color", "white");
}

function Blur(element)
{
    $("#" + element.id).css("background-color", "white");
    $("#" + element.id).css("color", "black");
}

function OnlyNumeber(element)
{
    element.value = element.value.replace(/[^0-9]/g, '');
}

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
