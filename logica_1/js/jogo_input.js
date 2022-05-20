function sorteia(n) {
    return(Math.round(Math.random() * n));
}

function verifica () {
    if(input.value == numero) {
        document.write("Parabéns, você acertou! O número era " + numero);
    } 
    else {
        alert("Você errou!");
    } 
    input.value = ""; 
    input.focus();
}

function confere () {
    for(var posicao = 0; posicao < segredos.length; posicao++) {
        if(input.value == segredos[posicao]) {
            document.write("Parabéns, você acertou!");
            achou = true;
            break;
        }

    } if(achou == false) {
        document.write("Você errou...");
    }
    input.value = "";
    input.focus();
    document.write("<br><hr><center><big>Fim, obrigado por jogar!</big></center>")
}

var input = document.querySelector(".input-jogo");
input.focus();
var numero = sorteia(10);
var segredos = [2, 4, 6, 8, 0];
var button = document.querySelector(".btn-jogo");
var achou = false;
    
//button.onclick = confere;
button.onclick = verifica;