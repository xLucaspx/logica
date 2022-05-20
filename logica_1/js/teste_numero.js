function pulaLinha() {
    document.write("<br><hr>");
}
function escreva(frase) {
    document.write("<strong>" + frase + "</strong>");
    pulaLinha();
}
function sorteia(n) {
    return Math.round(Math.random() * n);
}

//var numero = Math.round(Math.random() * 10);
var numero = sorteia(10);
//console.log(numero);
var chute = parseInt(prompt("Tente adivinhar o número de 0 a 10"));

if(chute == numero) {
    escreva("Parabéns, você acertou!");
} else {
    escreva("Ops, você errou... O número era " + numero + "!");
}

escreva("Obrigado por jogar!");