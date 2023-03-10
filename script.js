const canvas = document.querySelector(".canvas");
const pincel = canvas.getContext("2d");
const resetButton = document.querySelector(".button");


let cores = [["red", 0], ["blue", 0], ["green", 0], ["purple", 0]];
let ultimoNumero;
let locaisSorteadosComCor = [];
let gameEnd = false;

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

function identificaClique(x, y) {
    let cliqueIdentificado;

    locaisSorteadosComCor.filter((value) => {
        if((x >= value[0] && x <= value[0] + 50) && (y >= value[1] && y <= value[1] + 50)) {
            cliqueIdentificado = value;
        }
    });

    return cliqueIdentificado;
}

let numCliques = 0;

let corDoClique1;
let corDoClique2;

function incrementaEVerifica(event) {
    const x = event.pageX;
    const y = event.pageY;

    const cor = identificaClique(x, y);

    numCliques++;
    if(numCliques == 1 && !gameEnd) {
        corDoClique1 = cor;
        pincel.strokeStyle = "yellow";
        pincel.strokeRect(cor[0], cor[1], 50, 50);
    }

    if(numCliques == 2 && !gameEnd) {
        corDoClique2 = cor;

        if((corDoClique1[0] != corDoClique2[0]) || (corDoClique1[1] != corDoClique2[1])) {
            if(corDoClique1[2] == corDoClique2[2]) {
                const index1 = locaisSorteadosComCor.indexOf(corDoClique1);
                const index2 = locaisSorteadosComCor.indexOf(corDoClique2);
    
                locaisSorteadosComCor[index1][2] = "white";
                locaisSorteadosComCor[index2][2] = "white";

                gameEnd = verificaSeOJogoAcabou(locaisSorteadosComCor);

                if(gameEnd) {
                    resetButton.classList.remove("invisivel");
                    preencheTelaVitoria();
                }
            }else {
                redesenhaTela(locaisSorteadosComCor);
            }
        }
        numCliques = 0;

        if(!gameEnd) {
            redesenhaTela(locaisSorteadosComCor);
        }
        
    }
}

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

function verificaSeOJogoAcabou(array) {
    let resposta = array.every(function(value) {return value[2] == "white"});
    return resposta;
}

function reset() {
    cores = [["red", 0], ["blue", 0], ["green", 0], ["purple", 0]];
    gameEnd = false;
    numCliques = 0;
}

function preencheTelaVitoria() {
    clear();
    pincel.fillStyle = "green"; // 300 largura, 150 altura
    pincel.fillRect(150, 100, 300, 150);

    pincel.fillStyle = "white";
    pincel.font = "40px arial";
    pincel.fillText("Voc?? venceu!", 180, 190);

    pincel.strokeStyle = "black";
    pincel.strokeRect(150, 100, 300, 150);
}

canvas.addEventListener("mousedown", incrementaEVerifica);
resetButton.addEventListener("click", function() {
    reset();
    preencheTela();
    resetButton.classList.add("invisivel");
});
preencheTela();