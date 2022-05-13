// criar um método para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    título: 'Vingadores',
    ano: 2018,
    direto: 'Robin',
    personagem: 'Thor'
};

exibirPropriedades(filme);

function exibirPropriedades(obj) {

    for (key in obj) {
        if(typeof obj[key] === 'string'){
        console.log(key, obj[key])
        };
    };

};


