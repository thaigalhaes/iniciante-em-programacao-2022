const quadrados = document.querySelectorAll(".quadrado-jogo");

//variaveis dos jogadores//
const X = "X";
const O = "O";

function proximo(){
    jogador === "X" ? jogador = "O" : jogador = "X";
    marcarJogadorAtivo (jogador);

}
let jogador = "X";
marcarJogadorAtivo (jogador);

//Tabuleiro
function selecionarArea(posicaoLinha, posicaoColuna) {
   const getText = document.querySelector(`[data-linha='${posicaoLinha}'][data-coluna='${posicaoColuna}']`).textContent;
   if (jogador === "X"){
    if (getText ===""){
        desenharSimbolo(X, posicaoLinha,posicaoColuna);
        checarVitoria ();
        proximo();
    }
   }
   else {
    if (getText === ""){
        desenharSimbolo(O, posicaoLinha,posicaoColuna);
        checarVitoria ();
        proximo(); 
    } 
   }
}

function verificarTabuleiro (){
    for (let i in quadrados ){
        if (quadrados [i].textContent===''){
            return false;
        }
    }
    return true;
}
function verificarQuadrados (quadrado1, quadrado2, quadrado3){
    if(quadrado1.textContent === quadrado2.textContent && quadrado1.textContent === quadrado3.textContent && quadrado1.textContent !== ""){
        return true;
    }
    return false;
}

//Vencedor
function checarVitoria () {
    const quadrado = document.querySelectorAll(".quadrado-jogo");
    if ( verificarQuadrados (quadrado [0], quadrado [1], quadrado [2]) | verificarQuadrados (quadrado [3], quadrado [4], quadrado [5])||
    verificarQuadrados (quadrado [6], quadrado [7], quadrado [8])|| verificarQuadrados (quadrado [0], quadrado [3], quadrado [6])||
    verificarQuadrados (quadrado [1], quadrado [4], quadrado [7])||verificarQuadrados(quadrado [2], quadrado [5], quadrado [8])||
    verificarQuadrados (quadrado [0], quadrado [4], quadrado [8]) || verificarQuadrados (quadrado [2], quadrado [4], quadrado [6])) {
   
     quadrados.forEach ((quadrado) => {quadrado.removeAttribute("onclick");});
    exibirResultado (`O jogador ${jogador} ganhou` );
    }
    else {
        verificarTabuleiro () ? exibirResultado ("Teve um Empate"):'';
    }
}

//Reiniciar
function reiniciarJogo() {
location.reload ();
}

