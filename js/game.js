// iniciar minhas variaveis 
let board = ['', '', '', '', '', '', '', '', '']
let playerTime = 0;
let symbols = [ 'o', 'x']
let gameOver = false;
//position da interface q é o id do .square elemento do html
function handleMove (position) {

    //o true ou false faz nossa funcao executar sim ou nao dada a situacao
    if (gameOver ) {
        return;
    }

    //se o id do quadrado igual vazio quero q receba o a posicao da vez
    if (board[position] == "") {
        //se ja tem o valor receba o msm valor
        board[position] = symbols[playerTime];
        
        //houve jogada vencedora? se sim isSwin ganhou passar a ser gameover
        gameOver = isWin(); 
        //se o zero prenche "o" quadrado qro q passe a prencher o "x"
        if (gameOver == false) {
            if(playerTime == 0) {
                playerTime = 1;
            } else {
                playerTime = 0;
            }
        }
    }

    return gameOver
}

function isWin() {
    let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
//qro q nosso index 0 atualiza a largura e incremente cada acao
    for (let i = 0; i < winStates.length; i++) {
        //cada elemento significa uma posicao de qual sequeuncia
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];
        //se positon dos 3 seguinte seguir esse padrao é win
        if (board[pos1] == board[pos2] && 
            board[pos1] == board[pos3] && 
            board[pos1] != '') {
                //temos um vencedor
                return true;
            }
    }

    return false
}