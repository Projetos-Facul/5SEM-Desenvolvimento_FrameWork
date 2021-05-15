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
                Focus(this);
            }
        );

        $('input[type="text"]').blur(function()
            {
                Blur(this);
            }
        );

        $('#btnCalc').click(function()
            {
                Calcular ("Geral");
            }
        );

        $("input[type='text']").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
               $("#" + this.id + "Mensagem")
                    .html("Digite somente numeros")
                    .css("color", "red")
                    .fadeIn(100)
                    .fadeOut(3500);
                
                return false;
           }
        });
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

function Calcular (form)
{
    var formulario = document.getElementById(form).elements;
    var cont = 0;
    alert(formulario.length);
    for(i=0; i < formulario.length; i++)
    {
        var input = formulario.item(i);
        if(input.value == "" )
        {
            $("#" + input.id).css("background-color", "red");
            cont=1;
        }
    }

    if (cont == 1)
    {
        alert("Preencha todos os campos com no minimo 0");
    }
    else
    {   
        var resSeco     = Math.ceil(parseInt(formulario.item(0).value)    / parseInt(formulario.item(1).value));
        var resMolhado  = Math.ceil(parseInt(formulario.item(2).value)    / parseInt(formulario.item(3).value));
        var resFragil   = Math.ceil(parseInt(formulario.item(4).value)    / parseInt(formulario.item(5).value));

        alert ( "Para esta compra deve usar: " + (resSeco+resMolhado+resFragil) + " Sacolas"
                +"\n Sendo: \n        "
                + resSeco       + " para itens secos\n        "
                + resMolhado    + " para itens molhados\n        "
                + resFragil     + " para itens frageis");
    }
}