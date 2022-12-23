const canvas = document.querySelector(".canvas");
const pincel = canvas.getContext("2d");

let cores = [["red", 0], ["blue", 0], ["green", 0], ["purple", 0]];
let ultimoNumero;
let locaisSorteadosComCor = [];

function makeBlock(eixoX, eixoY, tamanho, cor) {
    pincel.fillStyle = cor;
    pincel.fillRect(eixoX, eixoY, tamanho, tamanho);

    pincel.strokeStyle = "black";
    pincel.strokeRect(eixoX, eixoY, tamanho, tamanho);
}

function sorteiaAleatorio(limite) {
    return Math.round(Math.random() * limite);
}

function preencheTela() {
    for(let y = 0; y < 400; y += 50) {
        for(let x = 0; x < 600; x += 50){
            let numCor = sorteiaAleatorio(cores.length - 1);

            makeBlock(x, y, 50, cores[numCor][0]);
            cores[numCor][1]++;

            locaisSorteadosComCor.push([x, y, cores[numCor][0]]);

            if(cores[numCor][1] == 24) {
                cores.splice(numCor, 1);
            }
        }
    }
}


// function identificadora de clique e cor

function identificaClique(x, y) {
    let cliqueIdentificado;

    locaisSorteadosComCor.filter((value) => {
        if((x >= value[0] && x <= value[0] + 50) && (y >= value[1] && y <= value[1] + 50)) {
            cliqueIdentificado = value;
        }
    });

    return cliqueIdentificado;
}

// função que incrementa o clique e verifica se os dois são iguais.

let numCliques = 0;

let corDoClique1;
let corDoClique2;

function incrementaEVerifica(event) {
    const x = event.pageX;
    const y = event.pageY;

    const cor = identificaClique(x, y);

    numCliques++;
    if(numCliques == 1) {
        corDoClique1 = cor;
    }

    if(numCliques == 2) {
        corDoClique2 = cor;

        if((corDoClique1[0] != corDoClique2[0]) || (corDoClique1[1] != corDoClique2[1])) {
            if(corDoClique1[2] == corDoClique2[2]) {
                const index1 = locaisSorteadosComCor.indexOf(corDoClique1);
                const index2 = locaisSorteadosComCor.indexOf(corDoClique2);
    
                locaisSorteadosComCor[index1][2] = "white";
                locaisSorteadosComCor[index2][2] = "white";
    
                let gameEnd = verificaSeOJogoAcabou(locaisSorteadosComCor);
                redesenhaTela(locaisSorteadosComCor);

                if(gameEnd) {
                    alert("Jogo acabou");
                }
            }
        }else {
            console.log(corDoClique1[0], corDoClique1[1], corDoClique1[2]);
            console.log(corDoClique2[0], corDoClique2[1], corDoClique2[2]);
        }
        
        numCliques = 0;
    }
}


// Função para limpar a tela, e função para redesenhar a tela a partir de coordenadas

function clear() {
    pincel.clearRect(0, 0, 600, 400);
}

function redesenhaTela(array) {
    clear();

    for(let i = 0; i < array.length; i++) {
        let coordenadaDaVez = array[i];
        makeBlock(coordenadaDaVez[0], coordenadaDaVez[1], 50, coordenadaDaVez[2]);
    }
}

// Função que verificase o jogo acabou

function verificaSeOJogoAcabou(array) {
    let resposta = array.every(function(value) {return value[2] == "white"});
    return resposta;
}

canvas.addEventListener("mousedown", incrementaEVerifica);
preencheTela();