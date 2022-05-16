//Criar uma função que exibe a quantidade de *
//que aquela linha possui

exibirAsteristicos(15);

function exibirAsteristicos(linhas) {

    for (let i = 0; i < linhas; i++) {
        console.log("*".repeat(i));
    }
}

//solução do video

// function exibirAsteristicos(linhas){
//     let padrao = '';
//     for(let linha = 1; linha <= linhas; linha++){
//         padrao += '*';
//         console.log(padrao);
//     }
// }

//ou


// function exibirAsteristicos(linhas) {

//     for (let linha = 1; linha <= linhas; linha++) {
//         let padrao = '';
//         for (let i = 0; i < linha; i++) {
//             padrao += '*';
//         }
//         console.log(padrao);
//     }
// }