// iniciar minhas variaveis 
let board = ['', '', '', '', '', '', '', '', '']

let playerTime = 0;

let symbols = [ '0', 'x']

//position da interface q é o id do .square elemento do html
function handleMove (position) {
    board[position] = symbols[playerTime];

    if(playerTime == 0) {
        playerTime = 1;
    } else {
        playerTime = 0;
    }
}