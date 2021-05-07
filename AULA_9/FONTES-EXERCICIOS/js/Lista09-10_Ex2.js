var ArrayUser = ['JOAO', 'PAULO', 'MARIA'];
var ArraySenha = ['123456', 'A1B2C3', '676767'];

User = prompt("Usuario:");
Senha = prompt("Senha:");

var i = 0;
var j = 0;
var controle = 0;

for (i=0;i<3;i++)
{
    if(User == ArrayUser[i])
    {
        for (j=0;j<3;j++)
        {
            if(Senha == ArraySenha[j]);
            {
                i=3;
                j=3;
                controle=-1;
            }
        }
    }
}

if(controle == -1)
{
    alert("Acesso Garantido");
}
else
{
    alert("Usuario ou senha incorretos!");
}