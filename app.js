/* let titulo = document.querySelector('h1')
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p')
paragrafo.innerHTML = 'Escolha um número entre 1 e 10'; */

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirMensagemInicialNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirMensagemInicialNaTela('h1', 'Jogo do número secreto');
    exibirMensagemInicialNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    // console.log('O botão foi clicado!')
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirMensagemInicialNaTela('h1', 'VOCÊ ACERTOU!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}.`;
        exibirMensagemInicialNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirMensagemInicialNaTela('p', 'O número secreto é menor.');
        } else {
            exibirMensagemInicialNaTela('p', 'O número secreto é maior.');
        }
        //tentativas = tentativas + 1;
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}