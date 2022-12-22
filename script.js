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

            if(cores[numCor][1] == 24) {
                cores.splice(numCor, 1);
            }
        }
    }
}