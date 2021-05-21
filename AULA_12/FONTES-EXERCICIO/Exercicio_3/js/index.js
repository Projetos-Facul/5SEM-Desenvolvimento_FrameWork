var ArrayNome = [];
var ArrayValores = ['Aprovado', 'Lista de Espera', 'Não foi dessa vez'];

for ( i = 0; i < 6; i++ )
{
    ArrayNome[i] = prompt( `Digite o ${i+1}º nome: ` );
}

var j = 0;
for ( i=0; i < 6; i++)
{
    console.log(`Aluno: ${ArrayNome[i]} com situação ${ArrayValores[j]} na posição geral ${i+1}`);
    if( (i%2) == 1){j++;}
}