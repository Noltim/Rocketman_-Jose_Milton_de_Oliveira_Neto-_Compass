// let idade = 5;
// console.log(idade);
// let altura = 180;
// console.log(altura);

//----------Variaveis--------------

//Exercicio 1 - imprimir 3 variaveis;
// let nome = 'milton';
// let sobrenome = 'Oliveira';
// let curso = 'Si';

// console.log(nome, ' ', sobrenome, ' ', curso);

//----------Constantes---------------

//let valorVariavel = 20;
//valorVariavel =30; devido ao carater mutavel da declaração
// let é possivel atribuir novos valores a ele.
//conts valorFixo = 20;
//valorFixo = 30; devido ao carate fixo da declaração não é
// possivel a sua modificação de valor por atribuição.

//-----------Tipos primitivos----------
// let nome = 'milton'; String literal

// let char = 's'; Aqui seria um char? Pesquisar depois.

// let idade = 25; Number literal;
// será que tem outros tipos de numeros? Byte, short, double...

// let estaAprovado = true; Boolean 

// let sobrenome; Não declara fica como undefined
// se for iqual ao java pode usar como scanner para atribuir
// valor

// let corSelecionado = null; valor não declarado para escolha
// do usuario e redefinição para outro em caso de mudança.

//-------------Tipagem Dinamica-----------------
// PS: aplica no console do navegador o typeof "variavel"
// dai vera o tipo

// let nome = 'Testildo';
// typeof nome

//-------------objeto-------------------------
//PS: Testar o typeof no console do navegador;
//exerc colocar mais 3 propriedades no projeto.
// let pessoa = {
//     nome: 'Milton',
//     idade: 29,
//     estaAprovado: true,
//     sobrenome: 'Oliveira',
//     curso: 'Si',
//     periodo: 3,
//     turno: 'noite'

// };

// console.log(pessoa);

//---------------Arrays------------------
// let familia = [true, 'casa', 14, null];
// console.log(familia.length);
// console.log(familia[3]);

//exerc definir um array com as propriedades do colega

// let tulioAguiar = ['Tulio Aguiar', 25, 'Recife'];
// console.log(tulioAguiar.length);
// console.log(tulioAguiar[0]);

//------------funcions---------------

//verbi + substativo

// let corSite = "azul";
// function resetarCor(cor){
//     corSite = cor;
// };

//  console.log(corSite);
//  resetarCor();
//  console.log(corSite);

// console.log(corSite);
// resetarCor("Vermelho");
// console.log(corSite);


// let corSite = "azul";
// function resetarCor(cor, tonalidade){
//     corSite = cor + tonalidade;
// };

// console.log(corSite);
// resetarCor("Vermelho", " Claro");
// console.log(corSite);


//exercicio - Postar um função que altere algo

// let nome = 'Caio';
// function alterarNome(novoNome){
//     nome = novoNome;
// };

// console.log(nome);
// alterarNome('Milton');
// console.log(nome);

//------------Tipos de Funções----------------
//Realizar uma tarefa, não devolve nada

// function dizerNome(){
//     console.log('Milton');
// };

// dizerNome();

//Faz um cálculo ou operação e retorna algo

// function multiplicarPorDois(valor){
//     return valor * 2;
// };

// let resultado = multiplicarPorDois(5);

// console.log(resultado);

//--------------operadores-----------------

//Operadores aritimeticos(matematicos)
// operadores atribuição
//operadores de comparação
///operadores logicos
//operadores bitwise

//-------------operadores aritimeticos---------
// let salario = 100;

//+, -, *, /,**(exponencial)
// console.log(salario + salario);
// console.log(salario - salario);
// console.log(salario * salario);
// console.log(salario / salario);
// console.log(salario ** salario);
// console.log(5 ** 5);

//++ --

// let idade = 18;

// console.log(++idade);
// console.log(--idade);

//--------------Operadores de atribuição----------
// let valorTecladoGamer = 100;
// valorTecladoGamer += valorTecladoGamer;
// console.log(valorTecladoGamer);

//------------operadores igualdade-----------
//igualdade estrita
//usar sempre que possivel com 3=
// console.log(1===1);
// console.log('1'===1);

//igualdade solta
// console.log(1==1);
// console.log('1'==1);

//-------operador ternário-----------

// tem um cliente, 100 premium, comum
//let pontos = 100;
// let pontos = 200;
// let tipo = pontos > 100 ? 'premium' : 'comum';
// console.log(tipo);

//-------------operadores logicos--------------
// operador &&
// retorna true se os dois operandos forem true
//console.log(true && true);

// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

//console.log(podeAplicar);

//operador logico ou (||);
//retorna true se um dos operadores forem true

// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

// console.log('pode aplicar: ', podeAplicar);

//operador not (!)

// let candidatoRecusado = !podeAplicar;

// console.log('Candidato recusado', candidatoRecusado);



//----------Comparações não boleanos-----------
//Falsy são todos os valores:
// undefined
// null
//0
//false
// ''
// Nan - not a number

//Truthy são todos os valores:

//let corPersonalizada = 'Vermelho';
// let corPersonalizada = '';
// let corPadrao = 'Azul';
// let corPerfil = corPersonalizada || corPadrao;

// console.log(corPerfil);

//-------trocando valor (mini-projeto)--------





























