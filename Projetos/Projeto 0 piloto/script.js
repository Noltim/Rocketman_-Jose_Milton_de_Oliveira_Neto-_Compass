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
// feito em um projeto separado

//----------if...else------------
// if...else....
// switch....case

//Se a hora estiver entre 06:00 até 12:00: Bom dia!
// se estiver entre 12:00 até 18:00: Boa tarde!
//Caso contrário: Boa noite!

// let hora = 10;

// if(hora > 6 && hora < 12){
//     console.log('Bom dia!')
// }else if(hora > 12 && hora < 18){
//     console.log('Boa tarde!')

// }else{
//     console.log('Boa noite!')
// }

//---------Switch case---------
// let permissao; //comum,gerente,diretor

// switch(permissao){
//     case 'comum':
//         console.log('Usuário comum');
//         break;
//     case 'gerente':
//         console.log('Usuário gerente');
//         break;
//     case 'direto':
//         console.log('Usuário diretor');
//         break;
//     default:
//         console.log('Usuário não reconhecido!')

// }

//--------laço/loop for----------------

//1.for
//2.While
//3.Do...While
//4. For..in
//5 for..of

// for(let i = 0; i < 5; i++) {
//     console.log('Estou aprendendo!')
// }
// for(let i = 0; i < 5; i++) {
//     if(i % 2 !==0){
//         console.log(i)
//     }
// }

// for(let i = 5; i > 0; i--) {
//     if(i % 2 !==0){
//         console.log(i)
//     }
// }

//--------laço/loop while-------

// while loop
//  let i = 5;

// while (i > 0){
//      if(i % 2 !==0){
//      console.log(i)
//      }
//      i--;
//  }

//---------laço Do ... while-------
// do.. while - executa ao menos 1 vez
// let i = 0;
// do{
//     console.log('digitando!',i)
//     i++;
// }while(i<10);

//---------laço for in----------
// const pessoa = {
//     nome: 'Milton',
//     idade: 25
// };
// //key-value ex: nome é a key e Milton o valor
// for( let chave in pessoa){
//     console.log(chave, pessoa['nome']); // pode acessar por
//     // pessoa.nome (se souber o nome dos atributos)
// };

// const cores = [ 'Vermelhor', 'Azul', 'Verde'];

// for(let indice in cores){
//     console.log(indice, cores[indice])
// }

//----------laço for of------------

// const cores = [ 'Vermelhor', 'Azul', 'Verde'];

// for(let cor of cores){
//     console.log(cor)
// }

//teste

// const lista = [ 'Feijao', 'Arroz', 'Macarrao', 'Fuba'];

// for (const itens of lista) {
//     console.log(itens);
// };

//----- mini projeoto 3
//------mini projeto 4

//Parei em 2:28:58 do video
//---------------------------------------------
///---------dia 13/05-------------

//--------------Factory Functions-------------

// const celular = {
//       marcaCelular: "ASUS",
//       tamanhoTela: {
//            vertical: 155,
//            horizontal : 75
//       },
//       capacidadeBateria: 5000,
//       ligar : function () {
//           console.log("Fazendo ligação...")

//       }
// }
//Javascript Aula 34 - Factory Functions (Funcão de Fábrica)
// aqui temos uma redução do metodo em cima e optimização dele

// function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
//     return {
//         marcaCelular,
//         tamanhoTela,
//         capacidadeBateria,
//         ligar() {
//             console.log("Fazendo ligação...");
//         }
//     };
// };

// const celular = criarCelular('Zenfone', 5.5, 5000);
// console.log(celular);

//-------exemplo de function-----

// function criarCarro(modeloCarro, anoCarro, corCarro, tipoCarro, finalPlacaCarro) {
//         return{
//             modeloCarro,
//             anoCarro,
//             corCarro,
//             tipoCarro,
//             finalPlacaCarro,
//             ligarCarro(){
//                 console.log("Ligando carro...");
//             },
//             desligarCarro(){
//                 console.log("Desligar carro...");
//             }

//         };    
// }

// const carro1 = criarCarro ("Ferrari", 2022,"Azul","Sedan","K");
// console.log(carro1)




//-----------Construtor Functions--------------
//camelCase umDoisTresQuatro
// function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
//     return {
//         marcaCelular,
//         tamanhoTela,
//         capacidadeBateria,
//         ligar() {
//             console.log("Fazendo ligação...");
//         }
//     };
// };

//Pascal Case - UmDoisTresQuatro
// function Celular(marcaCelular,tamanhoTela,capacidadeBateria) {
//     this.marcaCelular = marcaCelular,
//     this.tamanhoTela = tamanhoTela,
//     this.capacidadeBateria = capacidadeBateria,
//     this.ligar = function(){
//         console.log("Fazendo ligação...");
//     };
// };

// const celular = new Celular("Asus", 5.5, 5000);
// console.log(celular)

//exmeplo de construtor

// function Carro(modeloCarro, anoCarro, corCarro, tipoCarro, finalPlacaCarro) {

//     this.modeloCarro = modeloCarro,
//         this.anoCarro = anoCarro,
//         this.corCarro = corCarro,
//         this.tipoCarro = tipoCarro,
//         this.finalPlacaCarro = finalPlacaCarro,
//         this.ligarCarro = function () {
//             console.log("Ligando carro...");
//         },
//         this.desligarCarro = function () {
//             console.log("Desligar carro...");
//         }
// }

// const carro1 = new Carro("Ferrari", 2022, "Azul", "Sedan", "K");
// console.log(carro1)

//---------Natuzera dinamica de OBJETOS---------------

//Javascript aula 36 - natureza dinâmica de objetos

// const mouse = {//objeto
//     cor: 'Red',
//     marca: "Dazz",
// }
// mouse.velocidade = 5000;
// mouse.trocarDPI = function(){ //metodo
//     console.log('Mudando DPI');
// }
// delete mouse.velocidade;
// delete mouse.trocarDPI;
// console.log(mouse);
// //como vocÊ pode ver ele pode mudar sua estrutura facilmente


//--------clocando objeto--------

// const celular = {

//         marcaCelular : "Asus",
//         tamanhoTela: {
//             vertical: 155,
//             horizontal: 75
//         },
//         ligar: function() {
//             console.log("Fazendo ligação...");
//         }
// };

// const novoObjeto = Object.assign({//primeira maneira de clonar
//     bateria: 5000//dessa maneira vc pode adc novas propriedades ao objeto
// }, celular);
// console.log(novoObjeto);

// const objeto2 = {...celular} //segunda maneira de clonar
// console.log(objeto2);

///exercicio

// const objTeste = {
//     gosto: 'Bom',
//     preparo: "Rapido",
//     fazer(){
//         console.log("Preparando...")
//     }

// };

// //clone na primeira maneira

// const novoObjetoTeste = Object.assign({
//     novaPropriedade: "New"
// },objTeste);

// console.log(novoObjetoTeste);

// const novoObjetoTeste2 = {...objTeste}
// console.log(novoObjetoTeste2);

//-------------Math---------------------
//para entender melhor as propriedades dele 
//consulte o site developmozila


//exercicio - usar algum dos metodos math em um
//escopo

// const peso = 80.90;

// console.log(Math.trunc(peso));
//Math.trunc retorna o valor sem a fração.

//------------String-------------

//tipo primitivo
// const mensagem = 'minha primeira mensagem';
// //tipo objeto
// const outraMensagem = new String('bom dia');

// no console foi digitado:

// typeof mensagem // retorno string

// typeof outraMensagem // retorno object

// outraMensagem.length // retorno 7

// outraMensagem[2] // retorno "m"

// mensagem.includes('primeira') // retorno true

// mensagem.includes('vermelho') // retorno false

// mensagem.startsWith("verde") // retorno false

// mensagem.endsWith('mensagem') // retorno true

// mensagem.indexOf('primeia') // retorno 6

// mensagem.replace('minha','sua') // retorno 'sua primeira mensagem'

// mensagem.trim() // retorno retira os espaços excedentes

// mensagem.split(' ') // quebra a mensagem onde o parametro passado esta


//-------template literal----------

//JS aula 39 - template literal 
// \n é uma seguencia de escapes
// por exempli para usar aspas \

// const mensagem = 'Oi isso é a minha\n' + 
// '\'primeira\' mensage';

// console.log(mensagem);

// //object {}
// //boolean true, false
// //string '',""
// //template ``

// const outra = `Oi isso é a minha
// 'outra' mensagem`; 

// console.log(outra);

// let nome = 'Outronome';

// const email =
// `Olá ${nome} ${1993+7}

// Obigadasdasdas dadasdasda sd asd asd 

// asdasdasd asd asd asd as das d asd 

// Obrigado,
// Milton.`


// console.log(email);

//---------DATE---------------

//Date

// const data1 = new Date();

// const data2 = new Date('March 06 2019 09:30' );

// const data3 = new Date(2020, 02, 03, 9, 30);

// data3.setFullYear(2030);

// data2.toDateString();

// date2.toTimeString();

// date2.toISOString();

//exercicio

// const dataHoje = new Date();
// const dataHoje2 = new Date('May 13 2022 10:45');
// const dataHoje3 = new Date(2022, 04, 14, 10, 45);

//--------------Mini projeto 11------------
//--------------mini projeto 12---------
//-------------miniprojeto13---------
//------------constructor-----------
//-----------miniprojeto14---------

// aula 52 introdução a ARRAYs

//---------Arrays-----------
//add novos elementos
//encontrar elementos
//remover elementos
//dividir elementos
//dividir arrays
//combinar arrays

//--------add elementos no array--------

// const numeros = [1, 2, 3];

// //inicio

// numeros.unshift(0);

// console.log(numeros);

// //meio

// numeros.splice(1,0,'a')//esse 0 no meio é para n deletar nada
// console.log(numeros);

// //final

// numeros.push(5);
// console.log(numeros);

//--------------Encontrando elementos no array-----------
//TIPOS PRIMITIVOS

//para encontra valores no array depende do tipo
//ha dois tipos o primitivos e o referencia

// O tamanho de valor primitivo é fixo, 
// portanto, o JavaScript armazena o valor 
// primitivo na pilha. Por outro lado, 
// o tamanho de um valor de referência é dinâmico, 
// o JavaScript armazena o valor de referência no heap.

// const numeros = [1, 2, 3, 1, 4];

// console.log(numeros.indexOf(2));
// console.log(numeros.indexOf(5));//aqui ele retorna -1 pq não tem o item procurado

// console.log(numeros.lastIndexOf(1));//aqui ele procura ultima vez q o numero 1 apareceu

// console.log(numeros.indexOf(2) !== -1);//aqui retornar true como confirmação de achar na pesquisa
// console.log(numeros.includes(2)); // aqui uma maneira mais facil de fazer o de cima.

//---------------Encontrando elementos no array---------
//TIPOS REFERÊNCIA
//como se trata de objetos diferentes o includes não funciona
//para achar é orecusa usar o metodo find ver em dev mozilla


// const marcas = [
//     {id: 1, nome: 'a'},
//     {id: 1, nome: 'a'}
// ];

// const marca = marcas.find(function(marca){
//     return marca.nome === "a";
// });

// console.log(marca)

//-----------ARROW functions---------------
// JS aula 56

// const marcas = [
//     {id: 1, nome: 'a'},
//     {id: 2, nome: 'b'}
// ]
// //maneira padrao de fazer
// console.log(marcas.find(function(marca){
//     return marca.nome === 'a';
// }));

// //maneira mais facil/curta

// console.log(marcas.find((marca) => marca.nome === 'a'));


//------------Removendo elementos do array----------
//aula 57

// const numeros = [1, 2, 3, 4, 5, 6];
// numeros.push();
// numeros.unshift();
// numeros.splice();

//-------final----

// .pop() para remover no final

//exemplo
// const ultimo = numeros.pop();
// console.log(ultimo);
// console.log(numeros);

// //---------inicio-----
// // .shift() para remover no primeiro

// //exempo
// const primeiro = numeros.shift();
// console.log(primeiro);
// console.log(numeros);

// //---------meio-----

// // .splice() para remover no meio

// //exemplo
// const meio = numeros.splice(2,1);//indice 2 sera removido apenas 1 numero
// console.log(meio);
// console.log(numeros);

//------------Esvaziando um array----------
//JS aula 58

// let numeros = [1, 2, 3, 4, 5, 6];

// //exemplo 1
// let outros = numeros;

// console.log(outros)

//----------Solução 1--------------
// numeros = [];

// console.log(numeros)

// //nessa solução tem dois problemas o primeiro é:
// // caso a variavel seja declarada como const ela não poderar ter seu valor mudado
// //e o segundo seria se ouvesse uma outra referencia(exemplo1) estivesse
// //recebendo o valor do objeto array em questao nao sofreria mudança

// //exemplo 1

// console.log(outros)

//-------------solução 2--------------
// O MELHOR METODO PARA USAR ///////////

// numeros.length = 0; // aqui ele apaga todo as referencias a ele vinculadas
// console.log(numeros);
// console.log(outros);

//--------------solução 3------------
// numeros.splice(0, numeros.length);
// console.log(numeros);
// console.log(outros);

///------------solução 4------------
// while(numeros.length > 0){ // essa é demorada se tiver muitos dados NÃO RECOMENDADA O USAR
// numeros.pop();
// };

//---------------Combinando um array----------
// // JS aula 59 combinado e cortando array

// const primeiro = [1, 2, 3];
// const segundo = [4, 5, 6];

// //----combinar ---

// // primeiro.concat(segundo); // para combinar vc usa esse metodo
// // para conseguir vizualizar acrescente a uma variavel

// const combinandoPrimeiroSegundo = primeiro.concat(segundo);

// console.log(combinandoPrimeiroSegundo);

// //--- dividir ---

// // .slice() // o metodo .slice() divide

// const cortado = combinandoPrimeiroSegundo.slice(1,3); // ele unca vai até o final , ou seja, 3 - 1 = 2
// console.log(cortado);

//-----------OPERADOR SPREAD-------------
// const primeiro = [1, 2, 3];
// const segundo = [4, 5, 6];

// //Combinando antigo
// const combinado = primeiro.concat(segundo);

// //dividindo/clonando antigo
// const cortado = combinado.slice();

// //-----spread -- nova tecnica

// //----Combinando novo---

// ///const juntando = [...primeiro,...segundo];

// //dessa maneira podemos acrescentar itens dentro do array

// //exemplo:

// const juntando = ['teste2',...primeiro,'teste1',...segundo,'test3'];
// console.log(juntando);

// //----clonagem nova---

// const clone = [...juntando];
// console.log(clone);

//----------------Foreach-------------






























































































































