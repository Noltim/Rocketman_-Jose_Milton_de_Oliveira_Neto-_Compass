
//Divisivel por 3 => fizz
//Divisivel por 5 => buzz
//divisivel por 3 e 5 => fizzbuzz
//não divisivel por 3 ou 5 => entrada
//não é um numero => não é um numero
const resultado = fizzBuzz(15);
console.log(resultado);



function fizzBuzz(entrada) {
  
    if (typeof entrada !== 'number' ) {
        console.log('Não é um número');
    } else if ( entrada % 3 !== 0 && entrada % 5 !== 0 ) {
        console.log(entrada);
    } else if (entrada % 3 === 0 && entrada % 5 === 0) {
        console.log('FizzBuzz');
    } else if ( entrada % 5 === 0){
        console.log('Buzz');
    }else{
        console.log('Fizz');
    }
    
};