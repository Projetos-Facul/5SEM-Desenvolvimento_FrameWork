$(document).ready(function()
    {
        $("#BotaoEnviar").click(function()
            {
                var Texto = $('#txtTexto').val();

                if( Texto.length < 5 )
                {
                    alert ( `Texto muito pequeno`)
                }
                else
                {
                    alert(`Texto Ok \n 1º caracter informado: ${Texto.substring(0,1)} \n Posicao da letra n é ${Texto.indexOf("n")}`);
                }
            }
        );
    }
);