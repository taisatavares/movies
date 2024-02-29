const buttons = document.querySelectorAll(".button");
const filmes = document.querySelectorAll(".filme");

buttons.forEach((button, indice) => {
    button.addEventListener("click", () => {
        
        desselecionarBotao();

        button.classList.add("selecionado");
        console.log()

        desselecionarFilme();

        filmes[indice].classList.add("selecionado");
    });
});

function desselecionarFilme(){
    const filmeSelecionado = document.querySelector(".filme.selecionado");
    filmeSelecionado.classList.remove("selecionado");
}


function desselecionarBotao() {
    const buttonSelecionado = document.querySelector(" .button.selecionado");
    buttonSelecionado.classList.remove("selecionado");
    
}
    





