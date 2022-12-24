# Game-of-blocks

## imagens do jogo

## Jogo

## Objetivo

<p>O objetivo desse jogo é quebrar blocos gemeos da mesma cor, clicando em blocos que possuem a mesma cor eles serão destruidos, e respectivamente para ganhar o jogo você
deve destruir todos os blocos do jogo, um a um com as cores gemeas.</p>

<p>Se toda a tela ficar sem blocos coloridos no fim do jogo, você vence.</p>

## Tecnologias utilizadas

<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>Javascript</li>
</ul>

## Funcionalidades do game

<ul>
  <li>
    <h3>Eventos de clique a partir do mousedown</h3>
    <p>A partir dos eventos de clique, eu faço uma incrementações(limite:2) e a partir, dos dois cliques eu verifico se ambos fazem parte da mesma cor, se sim 
    eles são destruidos, caso contrario o jogo segue ocorrendo e nenhum bloco é apagado.</p>
  </li>
  <li>
    <h3>Identificação de cor e localização a partir de um clique</h3>
    <p>A partir do evento de clique, eu consigo pegar o "x" e o "y" do elemento, podendo assim fazer uma identificação no array dos blocos sorteados na partida que 
    também conta com as suas posições atuais no jogo, e partir dos dados obtidos do evento, eu posso verificar em que coordenada ele sem encaixa em relação com o array
    de blocos sorteados.</p>
  </li>
  <li>
    <h3>Tela redesenhada a cada dois cliques</h3>
    <p>A cada dois cliques, é verificado se os blocos são identicos, se forem eles são destruidos e a tela se redesenha a partir dali, porém caso os blocos não sejam
    iguais, a tela se redesenha também, por conta da borda amarela de seleção de bloco que apareçe toda vez que se clica no primeiro bloco.
    <br>
    E se o clique duplo for no mesmo bloco, a tela também será redesenhada.</p>
  </li>
  <li>
    <h3>Sorteio de blocos aleatórios com limite de 24 blocos cada</h3>
    <p>O sorteio é feito com cores aleatórias de acordo com a lista de cores, as posições serão sempre aleatórias, mas tem um limite claro, porque o jogo precisa 
    de um fim, e se sobrar um bloco no fim, o jogo nunca acaba, então usei a matematica um pouco para definir a quantidade certa de blocos de cada cor que teriam
    que ser colocado no jogo rsrsrs :) </p>
  </li>
</ul>



