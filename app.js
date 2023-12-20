let listaNumeros = [];
let numeroLimite = 10;
let numero = gerarNumero();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número de 1 a 10');
}
mensagemInicial()

function verificarChute() {
    chute = document.querySelector('input').value;

    if (chute == numero) {
        let tentativa = tentativas > 1 ? 'tentativas!' : 'tentativa!'
        let textoAcerto = `Boa, você acertou com ${tentativas} ${tentativa}`
        exibirTexto('h1', textoAcerto);
        let paragrafoAcerto = `O número secreto era ${numero}!`
        exibirTexto('p', paragrafoAcerto);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute < numero){
        exibirTexto('p', `O número secreto é maior que ${chute}`);
        } else{
            if (chute > numero) {
            exibirTexto('p', `O número secreto é menor que ${chute}`);
            } 
            
        }
        tentativas++
        limparCampo()
    }
}
function gerarNumero () {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let tamanhoLista = listaNumeros.length
    if (tamanhoLista == numeroLimite) {
        listaNumeros = [];
    }
    if(listaNumeros.includes(numeroEscolhido)) {
        return gerarNumero();
    } else {
        listaNumeros.push(numeroEscolhido);
        console.log(listaNumeros);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function resetBotao() {
numero = gerarNumero()
limparCampo()
tentativas = 1
mensagemInicial()
document.getElementById('reiniciar').setAttribute('disabled', true);
}