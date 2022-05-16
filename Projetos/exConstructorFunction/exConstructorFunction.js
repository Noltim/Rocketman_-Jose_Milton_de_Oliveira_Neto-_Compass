//Javascript aula 46 - Constructor Function (exerc)

//criar um objeto postagem
//titulo, mensagem, autor, visualizações, comentarios, estarAoVivo


function postagem(titulo, mensagem, autor) {

    this.titulo = titulo,
        this.mensagem = mensagem,
        this.autor = autor,
        this.visualizacoes = 0,
        this.comentarios = comentarios = [],
        this.estaAoVivo = false
}

let postagem1 = new postagem('a', 'b', 'c')


console.log(postagem1);