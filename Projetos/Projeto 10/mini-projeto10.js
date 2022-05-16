// criar função para mostrar os números primos

//primos
//compostos

//ex: 10, 11

exibirNumerosPrimos(20);

function exibirNumerosPrimos(limite) {
    let contador = 2;
    do {
        podeImprimir = true;
        for (let divisor = 2; divisor < contador; divisor++) {
            if (contador % divisor === 0) {
                podeImprimir = false;
                break;
            };

        };
        if (podeImprimir) {
            console.log(contador);
        };

        contador++;
    } while (contador <= limite);

};



//solução do video

// function exibirNumerosPrimos(limite) {

//     for (let numero = 0; numero < limite; numero++) {
//         let ehPrimo = true;

//         for (let divisor = 2; divisor < numero; divisor++) {
//             if (numero % divisor === 0) {
//                 ehPrimo = false;
//                 break;
//             };
//             if (ehPrimo) console.log(numero);
//         };

//     };

// };

//ou

// function exibirNumerosPrimos(limite) {
//     for (let numero = 2; numero <= limite; numero++) {
//         if(numeroPrimo(numero)) console.log(numero);

//     }
// }

// function numeroPrimo(numero) {
//     for (let divisor = 2; divisor < numero;divisor++){
//          if(numero % divisor === 0){
//              return false;
//          }
//     }
//     return true;
// }