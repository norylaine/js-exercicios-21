/**
* Crie um programa que utiliza os números ímpares encontrados entre numeroInicial
* e numeroFinal e realiza a soma entre eles.
*
* Ex:
* numeroInicial = 2
* numeroFinal = 11
* impares = 3, 5, 7, 9, 11
* soma = 35
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i = 0; i < numeros.length; i++){
    console.log("o número incial é: ", numeros[i = 0])
    console.log("o número final é: ", numeros[i = 8])
} 

for(let i = 0; i < numeros.length; i++){
if (numeros[i] % 2 != 0){
   
    console.log("os números ímpares são: ", numeros[i])
}
}

let soma = 0;
for(let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 != 0){
        soma = soma + numeros[i];
    }
}
console.log("a soma dos números ímpares é: ", soma)

