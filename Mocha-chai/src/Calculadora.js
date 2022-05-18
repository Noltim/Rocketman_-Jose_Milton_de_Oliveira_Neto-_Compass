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

    static rad(a, b) {
        if (a < 0 && b % 2 == 0 || b < 0) {
            return "Não é possível extrair raiz quadrada de um número negativo no conjunto dos números reais."
        } else {
            return (a ** (1 / b));
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

    static raio(c) {
        return (c / (2 * 3.14))
    }

    static array(a, b, c) {
        return [a, b, c]
    }

    








}