const quadrados = document.querySelectorAll(".quadrado-jogo");
let checarVez = true;

const X = "X";
const O = "O";

document.addEventListener ("click", (event)=> {
    if (event.target.matches(".quadrado-jogo")){
        jogar(event.target.id);
    }
});


function jogar(id){
    const quadrados = document.getElementById(id);
    vez = checarVez ? X : O;
}
quadrados.textContent = vez;
checarVez = !checarVez;
checarVencedor (vez);


function reiniciarJogo() {

}

function selecionarArea(posicaoLinha, posicaoColuna) {
    console.log("chamando a funçao")
    console.log(posicaoLinha, posicaoColuna);
}