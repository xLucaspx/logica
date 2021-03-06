function pulaLinha() {
    document.write("<br><hr>");
}

function escreva(frase) {
    document.write("<big>" + frase + "</big>");
    pulaLinha();
}

function calculaImc(altura, peso) {
    return peso / (altura * 2);
}

var nome = prompt("Olá, vamos calcular seu IMC, primeiramente qual seu nome?");
var altura = prompt(nome + ", qual sua altura em metros? utilize apenas números e ponto");
var peso = prompt(nome + ", qual seu peso em quilos? utilize apenas números em ponto");
var imcCalculado = calculaImc(altura, peso).toFixed(2);

escreva(nome + ", seu IMC calculado é " + imcCalculado);

if(imcCalculado < 18.5) {
    escreva("Você está abaixo do peso, consulte um nutricionista.");
}
if(imcCalculado >= 18.5 && imcCalculado <=24.9) {
    escreva("Você está com o peso normal, parabéns!");
}
if(imcCalculado >= 25 && imcCalculado <= 29.9) {
    escreva("Você está com sobrepeso, consulte um nutricionista.");
}
if(imcCalculado >= 30 && imcCalculado <= 34.9) {
    escreva("Você está com obesidade grau I, consulte um médico ou nutricionista");
}
if(imcCalculado >= 35 && imcCalculado <= 39.9) {
    escreva("Você está com obesidade grau II (severa), consulte um médico ou nutricionista");
    }
if(imcCalculado >= 40) {
    escreva("Você está com obesidade grau III (mórbida), por favor consulte um médico especialista!");
}

escreva("Obrigado por utilizar este programa!");