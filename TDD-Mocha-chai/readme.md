# Compass UOL: Projeto Final Sprint 4

## Tecnologias estudadas e ferramentas utilizadas
- Javascript
- Nodejs
- Mocha
- Chai

## Conteúdo do Projeto 
- TDD

# Sobre o TDD 

## Execução do projeto

Para ser feito os teste deve se ter instalado o node.js e suas respectivas bibliotecas de teste o mocha e chai

Passo a passo para instalação do mocha e chai

- Tenha uma pasta vazia e abra um terminal nela;
- Inicie seu projeto node no terminal usando o seguinte comando: npm init -y
- Abra a ide que você usara para manipular os arquivos (preferencia vscode)
- Abra o aquivo json e acrescente a seguinte informação: "type": "module"
- no terminal instale as bibliotecas usando o comando: npm i -D mocha chai
- volte ao arquivo json e substitua o "test": "echo... por "test": "mocha"

pronto agora você consegue executar os testes.

para executar os testes você devera fazer os seguintes passos:

- crie uma pasta com nome: test 
- Nesta pasta você colocará o teste
- crie uma pasta src onde você colocara seu projeto que será testado
- Trasfira a calculadora.js para a pasta src e o Calculadora.spec.js para a pasta test
- abra o teste Calculadora.spec.js e digite no console o comando npm test para executar os testes.


# Considerações Finais

Todos os testes foram pensando levando em consideração possiveis tratamento que o usuario poderia ter ao
manusear a aplicação.

Uma resalva é valida para data enquanto dias passados. Quando executar o codigo será necessario corrigir 
os dias decorridos até a presente data

Em relação ao samples.spec.js foi deixado a cunho de aprendizado, pois ele foi a base para criação dos demais testes. Sua existência não
causa conflito.




