//Removendo elementos de arrays

const test = ["b","caixa", 1, 'numero', 'vasilha', 99];

//removendo no final

const removendoFinal = test.pop();
console.log("Elemento removido foi " , removendoFinal);
console.log(test);

//removendo no inicio

const removendoInicio = test.shift();
console.log("Elemento removido foi " , removendoInicio);
console.log(test);

//removendo no meio

const removendoMeio = test.splice(3,1);
console.log("Elemento removido foi " , removendoMeio);
console.log(test);

