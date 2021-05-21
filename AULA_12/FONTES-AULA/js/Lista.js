$(function()
    {
        $( "button" ).click( function()
            {
                $( "p" ).each( function()
                    {
                        //alert( $(this).text() );
                        alertar(this);
                    }
                );
                $( "h1" ).each( function()
                    {
                        //alert( $(this).text() );
                        alertar(this);
                    }
                );
            }
        );
    }
);

function alertar (obj)
{
    alert( $(obj).text() );
}