<h1> jogo da velha </h1>
<h2>📊finalizado</h2>

# 💻 Tecnologias:
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![Adobe XD](https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6)


# logica? passar todos os quadrados(board) com id
.
cada id tem o valor de 0 a 8 e passei esse ID dentro do html mesmo, esse valor corresponde a um elemento um .square (quadrado) do nosso board (quadro)
.
sabemos q sao 9 quadradros dentro do board esse noard é nosso jogo da velha.

# javascript, sistema com DOM
.
Preciso receber cada tecla do usuario precisei fazer teste para checar se o usuario clicou no quadrado, se sim, otimo mas o que acontece? bom, para cada quadrado usei for each
let square = document.querySelector(".square")     'ao todo tenho 9 quadrado'

# testagem dos eventos e funcoes
.
Dentro de uma funcao passei o evento clicar, mas quero para todos quadrados cada um passa por isso o "foreach()"
square.forEach.addEventListenner('click' () => {
  console.log("clicou!")
})
.
.
.
testado a funcionalidade quero armazenar o que foi clicado em um array diretamente mas nao posso, ue? como fica? te respondo no instagram @guihsantos2
vamos codar juntos

https://github.com/Guilhermefonseca2021/game_old/assets/92196697/367222de-b8f4-404e-a442-47bf7a473966
