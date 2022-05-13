// criar função soma que retorna a
// soma de todos os multiplos de 3 e 5

// multiplos de 3
// 3,6,9
//multiplos de 5
//5,10

// soma os multiplos
//armazenar os mult de 3
//armazernar os mult de 5
//somar os dois

somar(10);

function somar(limite) {
    let soma = 0;
    for (let i = 0; i <= limite; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            soma += i;
        };

    };
    console.log(soma);

};