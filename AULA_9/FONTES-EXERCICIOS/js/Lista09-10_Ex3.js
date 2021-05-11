var ArrayNum = [];
var Maior;
var Menor;
var Media=0;

for(i=1; i<=10; i++)
{
    Num = parseInt(prompt("Digite o " + i + "º numero: "));
    ArrayNum.push(Num);
    if (i==1)
    {
        Maior=Num;
        Menor=Num;
    }
    if(Num > Maior)
    {
        Maior=Num;
    }
    if (Num < Menor)
    {
        Menor=Num;
    }

    Media=Media+Num;
}

Media=Media/(i-1);

console.log("Maior: " + Maior);
console.log("Menor: " + Menor);
console.log("Media: " + Media);

bubble_Sort(ArrayNum);

for(i=0; i<10; i++)
{
    alert((i+1) + "º Numero: " + ArrayNum[i]);
}

//----------------------------------------------------------

function bubble_Sort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}