const quadrados = document.querySelectorAll(".quadrado-jogo");

//variaveis dos jogadores//
const X = "X";
const O = "O";

function proximo(){
    jogador === "X" ? jogador = "O" : jogador = "X";
    proximaVez (jogador);

}
let jogador = "X";
proximaVez (jogador);

//Tabuleiro
function selecionarArea(posicaoLinha, posicaoColuna) {
   const getText = document.querySelector(`[data-linha='${posicaoLinha}'][data-coluna='${posicaoColuna}']`).textContent;
   if (jogador === "X"){
    if (getText ==""){
        colocaSimbolos (X, posicaoLinha,posicaoColuna);
        checarVitoria ();
        proximo();
    }
   }
   else {
    if (getText === ""){
        colocaSimbolos (O, posicaoLinha,posicaoColuna);
        checarVitoria ();
        proximo(); 
    } 
   }
}


function reiniciarJogo() {

}

