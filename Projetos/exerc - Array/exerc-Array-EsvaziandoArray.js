let abc = ['a', 'b', 'c', 'd', 'e', 'f'];
let testAbcRetorno = abc;

// 1° solução

abc = [];
console.log('1', abc);
console.log('1', testAbcRetorno);

// 2° solução 

let abc2 = ['a', 'b', 'c', 'd', 'e', 'f'];
let testAbcRetorno2 = abc;

abc2.length = 0;

console.log('2', abc2);
console.log('2', testAbcRetorno2);

// 3° solução

let abc3 = ['a', 'b', 'c', 'd', 'e', 'f'];
let testAbcRetorno3 = abc;

abc3.splice(0, abc3.length);

console.log('3', abc3);
console.log('3', testAbcRetorno3);

// 4° solução


let abc4 = ['a', 'b', 'c', 'd', 'e', 'f'];
let testAbcRetorno4 = abc;

while(abc4.length > 0){
    abc4.pop();
};

console.log('4', abc4);
console.log('4', testAbcRetorno4);