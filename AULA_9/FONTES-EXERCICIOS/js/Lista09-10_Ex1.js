var ArrayNome = [];
for(i=1; i<=4; i++)
{
    Nome = prompt("Digite o " + i + "º nome: ");
    ArrayNome.push(Nome);
}

ArrayNome.sort();

for(i=0; i<4; i++)
{
    console.log((i+1) + "º Nome: " + ArrayNome[i]);
    alert((i+1) + "º Nome: " + ArrayNome[i]);
}