function pulaLinha() {
    document.write("<br>");
}

function escreva(frase) {
    document.write(frase);
    pulaLinha();
}

var numeroPessoas = parseInt(prompt("Vamos calcular média de idades, primeiramente insira o número de pessoas que você quer calcular"));
var numero = 1;
var totalIdades = 0;

while(numero <= numeroPessoas) {
    var idade = parseInt(prompt("Informe a idade da pessoa " + numero + " (utilize apenas números)"));
    numero++;
    totalIdades = totalIdades + idade;
}
var mediaIdades = totalIdades / numeroPessoas;
escreva(" A média das idades é " + mediaIdades);
escreva("<hr><big>FIM!</big>");