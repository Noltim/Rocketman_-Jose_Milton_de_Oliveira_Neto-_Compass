
const array1 = ['a', 'b', 'c', 'd'];
const array2 = ['e', 'f', 'g', 'h'];

//combinando

const combinacao = array1.concat(array2);
console.log(combinacao);

//divisão

const cortando = combinacao.slice(0,5);
console.log(cortando);

//repetir combinação com slice

const repetir = combinacao.slice();
console.log(repetir);