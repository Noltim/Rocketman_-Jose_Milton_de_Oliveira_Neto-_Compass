//Exercicio de arrays

const arrays = [1,2,3,"a"];

//Introduzindo no inicio

arrays.unshift('iniciando')
console.log(arrays);

//Introduzindo no meio do array

arrays.splice(2, 0, 0)//o 0 do meio é para n deletar nada
console.log(arrays);

//Introduzindo no final

arrays.push("b");
console.log(arrays);
