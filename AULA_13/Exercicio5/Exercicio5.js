$(document).ready(function()
    {
        setInterval(function()
            {
                $("#Titulo").fadeOut(3000);
                $("#Titulo").fadeIn(3000);
            }
        ); 

        $("#btnLocalizar").click(function()
            {
                Calcular("Salas_Descricao");
            }
        );
    }
);

function Calcular (dl)
{
    var obj = $('#txtDisc').val();
    
    obj = obj.replace(/ /g, '_');

    $( '.Materia' )
        .css( 'background-color', 'white' )
        .css( 'color', 'black' );

    $( '#'+ obj )
        .css( 'background-color', 'red' )
        .css( 'color', 'white' );

    $( '#'+ obj + '2')
        .css( 'background-color', 'red' )
        .css( 'color', 'white' );
}