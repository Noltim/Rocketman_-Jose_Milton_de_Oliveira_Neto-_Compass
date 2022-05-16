//Como manipular um site usando JS
//Acessar uma parte do site onde é possivel a manipulação
//inspecione veja o ID ou a class desse para usar como referência

//site usado para aplicar o aprendizado
// https://devaprender.com/nao-consigo-terminar-nada-o-que-comeco/

//primeiro entrei no site e escolhe aonde vou fazer a manipulação.
//identifiquei no dom onde consta a informação sobre o local desejado
// procure o id ou class do local e o copiei

//Aqui modifiquei a propriedade de comentarios para colocar o que
//preciso escrever.

document.getElementById('comment').innerText = 'Olá sou Milton e estou fazendo seu curso de JS';

//Fiz o mesmo que em cima para Nome, mas tive qeu trocar a interação para value

document.getElementById('author').value = 'Milton';


//idem ao de cima

document.getElementById('email').value = 'milton_oliveira18@live.com';

//idem

document.getElementById('url').value = 'não tenho';

//evento de click

document.getElementById('submit').click();