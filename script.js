/*
DPa = √(Xi - MAS)^2 - .... / n[i]
*/

// Amostras
var arr = [ 
    14, 15, 15, 15, 16, 16, 16, 17
];

var resultado = 0;

// Função para calcular a média aritmética simples
function medArtS(nAmostras) {
    resultado = 0; // Variável local para evitar acúmulo
    for (var i = 0; i < arr.length
         ; i++) {
        resultado += arr[i]; // Soma os valores
    }
    // Divide a soma pela quantidade de amostras
    var masT = resultado / Math.fround(nAmostras);
    return masT;
}

var mas = medArtS(arr.length);
console.log("Média Aritmética Simples:", mas);
console.log(" ");

// Desvio (Xi - MAS)
function desvio(amostra, masT){
    var desvio = 0;
    var desvio = amostra - masT;
    return desvio;
}

for (var i = 0; i < arr.length; i++) {
    resultado = desvio(arr[i], mas);
    console.log(arr[i]+": Desvio= "+resultado);
    arr[i] = Math.pow(resultado, 2);
    console.log("Desvio²: "+arr[i]);
    console.log(" ");
}

// Soma dos desvios²
function somaIncrementado(){
    var resultado = 0;
    for(var i=0; i<arr.length; i++){
        resultado += arr[i];
    }
    return resultado;
}

somaDesvios = somaIncrementado();
console.log("Soma desvios²: ", somaDesvios);

// Variância (Amostra)
function varianciaA(soma, nAmostras){
    resultado = 0;
    resultado = soma/(nAmostras - 1);
    return resultado;
}

var va = varianciaA(somaDesvios, 8);
console.log("Variância (amostra): "+va);
console.log(" ");

function desvioPadrao(variancia){
    return resultado = Math.sqrt(variancia);
}

var dpa = desvioPadrao(va);
console.log("Desvio padrão (amostra):  "+Math.fround(dpa));

// for (var i = 0; i < arr.length; i++) {
//     arr[i] = Math.sqrt(arr[i]/Math.fround(6));
//     console.log(arr[i]);
// }


