//Exercicio nota escola
//Obter a média a partir de um array

//0-59:  F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

const array = [70, 70, 80];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    let somaNotas = 0, mediaNotas = 0;
    for (const nota in array) {
     somaNotas += array[nota];
    }//outra alternativa seria for(const nota of array){
    //somaNotas += nota;
    //}
    mediaNotas = somaNotas / array.length
    
    if (mediaNotas >= 90) {
        return 'Sua média foi: A com a nota: '+ mediaNotas;
    } else if(mediaNotas >= 80 && mediaNotas <= 89) {
        return 'Sua média foi: B com a nota: '+ mediaNotas;
    } else if(mediaNotas >= 70 && mediaNotas <= 79) {
        return 'Sua média foi: C com a nota: '+ mediaNotas;
    } else if(mediaNotas >= 60 && mediaNotas <= 69) {
        return 'Sua média foi: D com a nota: '+ mediaNotas;
    } else {
        return 'Sua média foi: F com a nota: '+ mediaNotas;
    };
        
    };

    //solução do video



// const array = [70, 70, 80];

// console.log(mediaDoAluno(array));

// function mediaDoAluno(notas) {
//    const media = calcularMedia(notas);
    
//     if(media < 59) return 'F';
//     if(media < 69) return 'D';
//     if(media < 79) return 'C';
//     if(media < 89) return 'B';
//     return 'A'    
//     };

// function calcularMedia(array) {
//     let soma = 0
//     for (let nota of array) {
//      soma += nota;
//     }
//     return soma /(array.length);
// }





