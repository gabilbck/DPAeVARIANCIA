/*
DPa = √(Xi - MAS)^2 - .... / n[i]

11, 12, 13, 15, 17, 17, 18, 21
14, 15, 15, 15, 16, 16, 16, 17
11, 11, 11, 12, 19, 20, 20, 20
*/

// Amostras
var amostraArr = [11, 11, 11, 12, 19, 20, 20, 20];

var resultado = 0;
var nAmostras = amostraArr.length;
 
// Função para calcular a média aritmética simples
function mediaAritmeticaSimples(nAmostras) {
  var soma = 0;
  for (var i = 0; i < nAmostras; i++) {
    soma += amostraArr[i]; // Soma os valores
  }
  console.log('Soma Total das amostras: ' + soma);
  return (resultado = soma / Math.fround(nAmostras)); // Divide a soma pela quantidade de amostras
}

var mas = mediaAritmeticaSimples(nAmostras);
console.log('Média Aritmética Simples:', mas);
console.log(' ');

// Desvio (Xi - MAS)
function desvio(amostra, masT) {
  return (resultado = amostra - masT);
}

for (var i = 0; i < nAmostras; i++) {
  resultado = desvio(amostraArr[i], mas);
  console.log(amostraArr[i] + ': Desvio= ' + resultado);
  amostraArr[i] = Math.pow(resultado, 2);
  console.log('Desvio²: ' + amostraArr[i]);
  console.log(' ');
}

// Soma dos desvios²
function somaIncrementado() {
  var resultado = 0;
  for (var i = 0; i < nAmostras; i++) {
    resultado += amostraArr[i];
  }
  return resultado;
}

somaDesvios = somaIncrementado();
console.log('Soma desvios²: ', somaDesvios);

// Variância (Amostra)
function varianciaA(soma, nAmostras) {
  return (resultado = soma / (nAmostras - 1));
}

var va = varianciaA(somaDesvios, 8);
console.log('Variância (amostra): ' + va);
console.log(' ');

function desvioPadrao(variancia) {
  return (resultado = Math.sqrt(variancia));
}

var dpa = desvioPadrao(va);
console.log('Desvio padrão (amostra):  ' + Math.fround(dpa));

// for (var i = 0; i < nAmostras; i++) {
//     amostraArr[i] = Math.sqrt(amostraArr[i]/Math.fround(6));
//     console.log(amostraArr[i]);
// }
