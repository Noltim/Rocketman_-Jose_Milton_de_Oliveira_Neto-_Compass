// JS - Objeto Endereço

//criar um objeto endereço que contém:

// rua
//cidade
//cep
//exibirEndereço(endereco)

let endereco = {
    rua: 'x',
    cidade: 'xxt',
    cep: '00000-000',
}

function exibirEndereco(endereco) {

    for (const exibir in endereco) {
        console.log(exibir, endereco[exibir]);

    }
}
exibirEndereco(endereco);



