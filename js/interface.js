//qro primeiro caregar pagina p saber onde o usuario clicar
document.addEventListener('DOMContentLoaded', () => {
    
    let squares = document.querySelectorAll(".square");
    //cada quadrado qro q receba evento clicar
    squares.forEach((square)=> {
        square.addEventListener('click', handleclick)
    })
})

function handleclick(event) {

    //(target) pq qro elemento 1 sofreu acao da funcao
    let square = event.target;
    let position = square.id; //qual position q qro q seja no board

    handleMove(position);
    updateSquares()

}

function updateSquares () {

    let squares = document.querySelectorAll(".square");
    
    squares.forEach((square)=> {
        let position = square.id;
        let symbol = board[position]

        if(symbol != "") {
            square.innerHTML = "<div class='${symbol}''></div>"
        }
    })
}
