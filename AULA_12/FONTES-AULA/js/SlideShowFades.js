$(document).ready(function()
    {
        setInterval(function() 
            {
                if ( $('#i1').is(':visible') )
                {
                    $("#i1").fadeOut(1000);
                    $("#i2").delay(1000);
                    $("#i2").fadeIn(1000);
                } 
                else if ( $('#i2').is(':visible') )
                {
                    $("#i2").fadeOut(1000);
                    $("#i3").delay(1000);
                    $("#i3").fadeIn(1000);
                }
                else if ( $('#i3').is(':visible') )
                {
                    $("#i3").fadeOut(1000);
                    $("#i4").delay(1000);
                    $("#i4").fadeIn(1000);
                }
                else if ( $('#i4').is(':visible') )
                {
                    $("#i4").fadeOut(1000);
                    $("#i1").delay(1000);
                    $("#i1").fadeIn(1000);
                }
            },3000
        );
    }
);