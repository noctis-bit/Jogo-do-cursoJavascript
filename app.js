let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
     exibirTextoNaTela('h1','Acertou!');
     let palavraTentativa = tentativas  > 1 ? 'tentativas': 'tentativa';
     let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} tentativas!`;
     exibirTextoNaTela('p', mensagemTentativas);
    } else{
        
        if( chute > numeroSecreto){
                 exibirTextoNaTela('p', ' O numero secreto é menor');
        }
        else{
                 exibirTextoNaTela('p', ' O numero secreto é maior');
        }
        tentativas++;
        limparTela();




    }
}
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function  limparTela(){

  chute = document.querySelector('input');
  chute.value = '';

}