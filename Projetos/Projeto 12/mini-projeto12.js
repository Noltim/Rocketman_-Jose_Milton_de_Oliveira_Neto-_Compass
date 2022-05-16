// exercicio 43 - igualdade de Objetos (exercício)

function endereco(rua, cidade, cep) {
   this.rua = rua,
   this.cidade = cidade,
   this.cep = cep
}

const endereco1 = new endereco("a","b","c")
const endereco2 = new endereco("a","b","c")

function saoIguais (endereco1, endereco2){
    //comparar se as propriedades são iguais
   if(endereco1.rua === endereco2.rua &&
    endereco1.cidade === endereco2.cidade &&
    endereco1.cep === endereco2.cep){
        return true;
    }else{
        return false;
    };
};

console.log(saoIguais(endereco1, endereco2));

function temEnderecoMemoriaIguais(endereco1,endereco2){
    //comparado se a referência do objeto apont para 
    //o mesmo local na memória
    return endereco1 === endereco2 // chute nem sei se é assim

} 

console.log(temEnderecoMemoriaIguais(endereco1, endereco2))

// solução do video

 
//   function saoIguais (endereco1, endereco2){
    
//   return endereco1.rua === endereco2.rua &&
//          endereco1.cidade === endereco2.cidade &&
//          endereco1.cep === endereco2.cep;
 
 
//  }
 
//  console.log(saoIguais(endereco1, endereco2));
 
//  function temEnderecoMemoriaIguais(endereco1,endereco2){
//          return endereco1 === endereco2
 
//  } 
 
//  console.log(temEnderecoMemoriaIguais(endereco1, endereco2))
 