const guardar = [
    {id: 1, item: 'tesoura'},
    {id: 2, item: 'roupas'},
    {id: 3, item: 'carteira'}
];

const buscar = guardar.find(function(buscar){
        return buscar.item === 'roupas'
});

console.log(buscar);