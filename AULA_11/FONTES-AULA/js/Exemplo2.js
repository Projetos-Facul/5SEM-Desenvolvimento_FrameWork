$(function()
    {
        $('#Texto').focus(function()
            {
                $('#Texto').css('background-color', 'grey');
                $('#Texto').css('color', 'white');
            }
        )

        $('#Texto').blur(function()
            {
                $('#Texto').css('background-color', 'white');
                $('#Texto').css('color', 'black');
            }
        )

        $('#Texto').change(function()
            {
                alert("Texto foi alterado!");
            }
        )

        $('#Texto').select(function()
            {
                alert("Texto foi selecionado!");
            }
        )

        $('button').click(function()
            {
                $('h1').hide();
            }
        )
    }
);