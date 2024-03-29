import chai from "chai";
import Calculadora from "../src/Calculadora.js";

const expect = chai.expect;

describe('Testes de soma', function () {
    it('Deve somar 4 e 5 resultando em 9', () => {
        let resultando = Calculadora.soma(4, 5);
        expect(resultando).to.be.eq(9);
    })
    it('Deve somar -4 e 5 resultado em 1', () => {
        let resultando = Calculadora.soma(-4, 5);
        expect(resultando).to.be.eq(1);
    })
    it('Deve somar -4 e -5 resultado em -9', () => {
        let resultando = Calculadora.soma(-4, -5);
        expect(resultando).to.be.eq(-9);
    })
})

describe('Testes de subtração', () => {
    it('Deve subtrair 4 e 5 resultando em -1', () => {
        let resultando = Calculadora.sub(4, 5);
        expect(resultando).to.be.eq(-1).and.to.be.a('number');
    })
    it('Deve subtrair -4 e -5 resultando em 1', () => {
        let resultado = Calculadora.sub(-4, -5);
        expect(resultado).to.be.eq(1);
    })
    it('Deve subtrair 4 e -5 resultando em 9', () => {
        let resultado = Calculadora.sub(4, -5)
        expect(resultado).to.be.eq(9)
    })
})

describe('Testes de multiplicação', () => {
    it('Deve multiplicar 4 e 5 resultando em 20', () => {
        let resultando = Calculadora.mult(4, 5);
        expect(resultando).to.be.eq(20).and.to.be.a('number');
    })
    it('Deve multiplicar -4 e -5 resultando em 20', () => {
        let resultado = Calculadora.mult(-4, -5);
        expect(resultado).to.be.eq(20);
    })
    it('Deve multiplicar 4 e -5 resultando em -20', () => {
        let resultado = Calculadora.mult(4, -5)
        expect(resultado).to.be.eq(-20)
    })
})

describe('Testes de divisão', () => {
    it('Deve dividir 4 e 5 resultando em 0.8', () => {
        let resultando = Calculadora.div(4, 5);
        expect(resultando).to.be.eq(0.8).and.to.be.a('number');
    })
    it('Deve dividir -4 e -5 resultando em 0.8', () => {
        let resultado = Calculadora.div(-4, -5);
        expect(resultado).to.be.eq(0.8);
    })
    it('Deve dividir 4 e -5 resultando em -0.8', () => {
        let resultado = Calculadora.div(4, -5)
        expect(resultado).to.be.eq(-0.8)
    })
    it('Deve dividir 4 e 0 resultado em "não é possivel dividir por 0"', () => {
        let resultado = Calculadora.div(4, 0)
        expect(resultado).to.be.eq("não é possivel dividir por 0")
    })
    it('Deve dividir -5.5 e 3 resultado é -1.8333333333333333', () => {
        let resultado = Calculadora.div(-5.5, 3)
        expect(resultado).to.be.eq(-1.8333333333333333)
    })
})

describe('Testes de potencia', () => {
    it('a base 4 com expoente 5 resultando em 1024', () => {
        let resultando = Calculadora.pot(4, 5);
        expect(resultando).to.be.eq(1024).and.to.be.a('number');
    })
    it('a base -4 com expoente 5 resultando em -1024', () => {
        let resultado = Calculadora.pot(-4, 5);
        expect(resultado).to.be.eq(-1024);
    })
    it('a base 4 com expoente -5 resultando em 0.0009765625', () => {
        let resultado = Calculadora.pot(4, -5)
        expect(resultado).to.be.eq(0.0009765625)
    })
})

describe('Testes de radicação', () => {
    it('A raiz 5 de 32 resultando em 2', () => {
        let resultando = Calculadora.rad(32, 5);
        expect(resultando).to.be.eq(2).and.to.be.a('number');
    })
    it('A raiz quadrada de -36 não existe em numeros reias', () => {
        let resultado = Calculadora.rad(-36, 2)
        expect(resultado).to.be.eq("Não é possível extrair raiz quadrada de um número negativo no conjunto dos números reais.")
    })
    it('A raiz 5 de -32 resultando em -2', () => {
        let resultando = Calculadora.rad(-32, 5);
        expect(resultando).to.be.eq("Não é possível extrair raiz quadrada de um número negativo no conjunto dos números reais.")
    }) 
})

describe('Teste de retorno do maior, menor ou  igual', () => {
    it('Quando ambos os números iguais retornar igual', () => {
        let resultado = Calculadora.comparar(6, 6)
        expect(resultado).to.be.eq("igual")
    })
    it('Quando primeiro for menor que o segundo retornar o segundo', () => {
        let resultado = Calculadora.comparar(5, 6)
        expect(resultado).to.be.eq(6)
    })
    it('Quando primeiro for maior que o segundo retornar o primeiro', () => {
        let resultado = Calculadora.comparar(10, 4)
        expect(resultado).to.be.eq(10)
    })
})

describe('Teste de calculo do raio', () => {
    it('Quando a circunferência for 3 o raio será 0.47770700636942676', () => {
        let resultado = Calculadora.raio(3)
        expect(resultado).to.be.eq(0.47770700636942676)
    })
    it('Quando a circunferência for dado em fração 1/5 o raio será 0.03184713375796178', () => {
        let resultado = Calculadora.raio(1 / 5)
        expect(resultado).to.be.eq(0.03184713375796178)
    })

})

describe('Teste de calcular a area', function () {
    it('A area deve ser de 28.26 ', function () {
        let resultado = Calculadora.area(3)
        expect(resultado).to.be.equals(28.26)

    })
})

describe('Teste  de array', () => {
    it('O resultado deve ser um array e não conter o número 3', () => {
        let resultado = Calculadora.array(4, 2, 5)
        expect(resultado).to.be.an('array').that.does.not.include(3);
    })
    it('O array está disposto na ordem solicitada [4,2,5]', () => {
        let resultado = Calculadora.array(4, 2, 5)
        expect(resultado).to.have.ordered.members([4, 2, 5]).but.not.have.ordered.members([5, 2, 1]);
    })
})

describe('Teste de data', function () {
    it('Calcula a diferença de uma data passa para atual em dias', () => {
        let resultado = Calculadora.data("2010", "07", "05")
        expect(resultado).to.be.eq(4306 + " Dias")// o teste teve a data de 4306 pois foi feito no dia 19/05/2022. Por isso vai dar erro
    })                                                  //vc precisa atulizar  para não dar
    it('Escrevendo data fora do padrão resulta em dias', () => {
        let resultado = Calculadora.data(2010, 7, 5)
        expect(resultado).to.be.eq(4306 + " Dias")// o teste teve a data de 4306 pois foi feito no dia 19/05/2022. Por isso vai dar erro
    })                                               //vc precisa atulizar  para não dar
    it('Passando data negativa', () => {
        let resultado = Calculadora.data("-1", "-2", "-3")
        expect(resultado).to.be.eq("Desculpa não há data negativa")
    })

})






