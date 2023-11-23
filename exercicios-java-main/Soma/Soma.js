var num1 = 17;
var num2 = 20;

//console.log (num1+num2);

var soma;
var resultado;

function calcularSoma(num1, num2) {
  soma = num1 + num2;
  return soma;
}

resultado = calcularSoma (num1, num2);
console.log("A soma de:",num1, " e",num2,"é:",resultado);

num1 = 766;
num2 = 582;

resultado = calcularSoma(num1, num2);
console.log("A soma de:",num1, " e",num2,"é:",resultado);