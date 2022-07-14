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

function verificarTabuleiro (){
    for (let i in quadrados [i].textContent==''){
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
    const qu = document.querySelectorAll(".quadrado-jogo");
    if ( checarQuadrados (quadrado [0], quadrado [1], quadrado [2]) | checarQuadrados (quadrado [3], quadrado [4], quadrado [5])||
    checarQuadrados (quadrado [6], quadrado [7], quadrado [8])|| checarQuadrados (quadrado [0], quadrado [3], quadrado [6])||
    checarQuadrados (quadrado [2], quadrado [5], quadrado [8])||checarQuadrados (quadrado [0], quadrado [4], quadrado [8])||
    checarQuadrados (quadrado [2], quadrado [4], quadrado [6])) {
    quadrados.forEach ((quadrado) =>{quadrado.removeAttribute("onclick");});
    mostrarResultado ('O ${jogador Ganhou');
    }
    else {
        verificarTabuleiro ()? mostrarResultado ("Teve um Empate"):'';
    }
}

//Reiniciar
function reiniciarJogo() {
windown.location.reload();
}

