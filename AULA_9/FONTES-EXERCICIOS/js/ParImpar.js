var impar=0;
var par=0;
var cont=0;

while(cont<=100)
{
    resto=cont%2;
    if(resto==0)
    {
        par=par+cont;
    }
    else if(resto==1)
    {
        impar=impar+cont;
        console.log("Adicionei: "+cont);
    }
    cont++;
}

console.log("TOTAL PAR....: " +par);
console.log("TOTAL IMPAR..: " + impar);
