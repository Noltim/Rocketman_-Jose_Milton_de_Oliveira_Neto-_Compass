const array1 = [1,2,3];
const array2 = ["%"];
const array3 = [4,5,6]

const juntandoComSpread = [...array1,...array2,...array3, '<- Tudo junto'];
console.log(juntandoComSpread);

const clonandoComSpread = [...juntandoComSpread];
console.log(clonandoComSpread);