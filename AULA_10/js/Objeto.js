var MeuCurso =
{
    Descricao: 'Ciencia da Computação',
    Disciplina: 'Desenvolvimento de FrameWork',
    Ano: 2021
}

alert("Minha disciplina é: " + MeuCurso.Disciplina);

MudarDisciplica("IA");

alert("Minha nova disciplina é: " + MeuCurso.Disciplina);

function MudarDisciplica(Disciplina)
{
    MeuCurso.Disciplina = Disciplina;
}