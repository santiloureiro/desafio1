let numeros = [0, 2, 4, 6, 7, 9, 10, 15, 26 , 32 ,45];
let numerosPares = [];
let numerosImpares = [];

for (let i = 0; i <= 10 ; i++) {
    if((numeros[i] % 2) === 0){
        numerosPares.push(numeros[i]);
    }
        else{
            numerosImpares.push(numeros[i]);
        }
}

console.log(numerosPares, numerosImpares);