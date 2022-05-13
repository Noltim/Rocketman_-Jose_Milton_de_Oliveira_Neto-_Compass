// // minha solução

let a = 10;
let b = 11;

function retornoMaiorNumero() {
    if (a > b) {
        console.log(a);
    }else{
        console.log(b);
    };
};

retornoMaiorNumero();

// solução do video

let valorMaior = max(10, 5);
console.log(valorMaior);

function max(numero1, numero2){
    if(numero1 > numero2){
        return numero1;
    }else{
        return numero2;
    };
};

/// ou

let valorMaior2 = max(11, 5);
console.log(valorMaior2);

function max(numero1, numero2){
    return numero1 > numero2 ? numero1 : numero2;
};