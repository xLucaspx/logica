var loginCadastrado = "alura";
var senhaCadastrada = "alura123";

var maximoTentativas = 3;
var tentativaAtual = 1;
    
while(tentativaAtual <= maximoTentativas) {
    var loginInformado = prompt("Informe o nome de usuário:");
    var senhaInformada = prompt("Informe sua senha:");

    if(loginCadastrado == loginInformado && senhaCadastrada == senhaInformada) {
        alert("Bem-vindo de volta " + loginCadastrado + "!");
        tentativaAtual = maximoTentativas;

    } else if(tentativaAtual == 3) {
        alert("Acesso negado, tentativas esgotadas!");

    } else {
        alert("Login ou senha inválidos! tentativas restantes: " + (maximoTentativas - tentativaAtual));
    } 
    tentativaAtual = tentativaAtual + 1
}