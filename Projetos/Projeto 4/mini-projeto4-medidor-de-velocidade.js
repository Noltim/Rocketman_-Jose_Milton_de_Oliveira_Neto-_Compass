// velocidade máxima de até 70;
//a cada 5km acima do limite você ganha 1 ponto
// Math.Floor();
// caso os pontos maior que 12 > "Carteira Suspendida"

verificarVelocidade(131);

//const velocidadeLimite = 70, quilometrosPorPontos = 5;
//let pontos=0 PS quando declarei o valor fora do escopo
// da função ele nao reconheceu.

function verificarVelocidade(velocidade) {
    const velocidadeLimite = 70, quilometrosPorPontos = 5;
    if (velocidade <= velocidadeLimite) 
        console.log('Velocidade permitida');
    else {
      const pontos = Math.floor(((velocidade - velocidadeLimite)/quilometrosPorPontos));
       if (pontos >= 12) {
           console.log('Carteira Suspensa');
       }else{
           console.log('Receberá: '+ pontos + ' na carteira, pois sua velocidade estava em: '+ velocidade+ 'km/h' );
       }
    }
     
};