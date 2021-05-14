$(function()
    {
        $('#Verde').click(function()
            {
                $('p').css('color', 'green');
                $('p').css('background-color', 'black');
                $('#Mensagem').text('Cor alterada para verde');
                $('#Mensagem').css('color', 'green');
                $('#Mensagem').css('border', '5px solid red');

                //$('#Mensagem').delay(5000);
                $('#Mensagem').fadeOut('slow');
                $('#Mensagem').fadeIn('slow');
            }
        )
        $('#Vermelho').click(function()
            {
                $('p').css('color', 'red');
                $('p').css('background-color', 'white');

                $('#Mensagem')
                    .text('Cor alterada para vermelho')
                    .css({color: 'red', border: '5px solid green'})
                    .delay(5000)
                    .fadeOut(3000)
                    .fadeIn(3000);
            }
        )
    }
)