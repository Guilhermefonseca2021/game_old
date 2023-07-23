<h1> jogo da velha </h1>
<h2>📊finalizado</h2>

# 💻 Tecnologias:
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![Adobe XD](https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6)


# Jogo da Velha em JavaScript

Este é um projeto de um jogo da velha implementado em JavaScript. O jogo permite que dois jogadores joguem um contra o outro em um tabuleiro 3x3. O objetivo é conseguir colocar três símbolos iguais em uma linha, coluna ou diagonal.

## Como jogar

1. Abra o arquivo `index.html` no seu navegador web.

2. O tabuleiro do jogo será exibido na tela. Cada célula representa uma posição no tabuleiro.

3. Os jogadores alternam suas jogadas clicando em uma célula vazia.

4. O primeiro jogador usa o símbolo "X" e o segundo jogador usa o símbolo "O".

5. O jogo continua até que um dos jogadores consiga colocar três símbolos iguais em uma linha, coluna ou diagonal, ou até que todas as células sejam preenchidas sem um vencedor, resultando em um empate.

# partes para desenvolver cada etapa

` à tabela para representar as posições do jogo.
 - Atribua um ID exclusivo a cada célula para identificá-las posteriormente no JavaScript.

2. Estilize o tabuleiro:
   - Use CSS para estilizar a tabela e as células para se parecerem com um tabuleiro de jogo da velha.

3. Defina as variáveis ​​no JavaScript:
   - Crie uma matriz 3x3 para representar o estado atual do tabuleiro.
   - Defina uma variável para controlar o jogador atual (por exemplo, "X" ou "O").

4. Adicione eventos de clique às células:
   - Use JavaScript para percorrer todas as células e adicionar um evento de clique a cada uma.
   - Quando uma célula for clicada, chame uma função para manipular a jogada.

5. Manipule a jogada:
   - Dentro da função de manipulação de jogada, verifique se a célula clicada está vazia.
   - Se estiver vazia, atualize o estado do tabuleiro e exiba o símbolo do jogador na célula clicada.
   - Verifique se há um vencedor chamando uma função de verificação de vitória.
   - Alterne o jogador atual para o próximo jogador.

6. Verifique a condição de vitória:
   - Crie uma função que verifique todas as combinações possíveis para determinar se um jogador ganhou.
   - Verifique as linhas, colunas e diagonais para ver se todas as células têm o mesmo símbolo.

7. Atualize o placar:
   - Mantenha o controle de quantas vitórias cada jogador tem.
   - Atualize o placar sempre que um jogador vencer.


https://github.com/Guilhermefonseca2021/game_old/assets/92196697/367222de-b8f4-404e-a442-47bf7a473966
