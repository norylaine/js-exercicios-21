/**
 * 1- Crie um programa que soma todos os números do vetor numeros.
 * 2- Faça com que o programa some apenas os números pares.
 * 3- Faça com que o programa mostre o resultado da soma dos números pares
 *      e da soma dos números ímpares separadamente.
 */

let numeros = [10, 2, 4, 67, 81, 92, 10, 4, 71, 14];

let soma = 0;
for(let indice = 0; indice < numeros.length; indice++){
    soma = soma + numeros[indice]
}
console.log("A soma de todos os números do vetor é: " + soma)

//

soma = 0;
for(let indice =0; indice < numeros.length; indice++){
    if (numeros[indice] % 2 == 0){
        soma = soma + numeros[indice];
    }
}
console.log("A soma dos números pares é: " + soma)

// % 2 == 0 significa se o resto da divisão por 2 for igual a zero

soma = 0;
for(let indice =0; indice < numeros.length; indice++){
    if (numeros[indice] % 2 != 0){
        soma = soma + numeros[indice];
    } 
}
console.log("A soma dos números ímpares é: " + soma)


// soma de números pares e ímpares separadamente.

