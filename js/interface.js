//qro primeiro varrer os quadrados e colocalos em arrays p saber a posicao
document.addEventListener('DOMContentLoaded', () => {
    
    let squares = document.querySelectorAll(".square");
    //cada quadrado qro q receba evento clicar enossa funcao de trocar de vez
    squares.forEach((square)=> {
        square.addEventListener('click', handleclick)
    })
})

function handleclick(event) {

    //(target) pq qro elemento q sofreu acao da funcao no caso o quadrado
    let square = event.target;
    let position = square.id; //qual position q qro q seja no board

    //vou pasasar por handle move qual nossa posicao
    if(handleMove(position)) {

        setInterval(() => {
            alert("o jogo acabou o '" + playerTime + "' venceuu!!!")
        }, 10);
    }
    updateSquares();
}

function updateSquares () {

    let squares = document.querySelectorAll(".square");
    
    squares.forEach((square)=> {
        let position = square.id;
        let symbol = board[position]

        if(symbol != "") {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}
