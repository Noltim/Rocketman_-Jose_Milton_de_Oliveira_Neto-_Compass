export default class Calculadora {

    static soma(a, b) {
        return a + b;
    };

    static sub(a, b) {
        return a - b;
    };

    static mult(a, b) {
        return a * b;
    };

    static div(a, b) {
        return a / b;
    };

    static pot(a, b) {
        return a ** b;
    };

    static rad(b, i) {
        if (b < 0){ // && i % 2 == 0 || i < 0) { -----> tive que retirar por conta de um erro no JS
            return "Não é possível extrair raiz quadrada de um número negativo no conjunto dos números reais."
        } else {
            return Math.pow (b, 1.0 / i); //(b ** (1/i)) tentei usar uma função do Js mesmo para retirar o erro, mas nao foi
        }
    };

    static comparar(a, b) {
        if (a > b) {
            return a
        } else if (a < b) {
            return b
        } else {
            return "igual"
        }
    }

    static raio(r) {
        return (r / (2 * 3.14))
    }

    static area(r){
        return  (3.14*(r**2))
    }

    static array(a, b, c) {
        return [a, b, c]
    }

    static data(a, m, d) {
        const now = new Date(); // Data de hoje
        const past = new Date(a, m, d); // Outra data no passado
        const diff = Math.abs(now.getTime() - past.getTime()); // Subtrai uma data pela outra
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).

        // Mostra a diferença em dias
        return days + " Dias";

    }










}