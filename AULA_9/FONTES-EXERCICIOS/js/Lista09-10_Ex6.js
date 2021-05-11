var A = parseInt(prompt("Digite o valor de A: "));
var B = parseInt(prompt("Digite o valor de B: "));
var C = parseInt(prompt("Digite o valor de C: "));

delta=Math.sqrt((B*B)-4*A*C);
x1=(-B+delta)/(2*A);
x2=(-B-delta)/(2*A);
alert("X1 = " + x1 + "\nX2 = " + x2);
