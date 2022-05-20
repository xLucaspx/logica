var ingredientes = [];
var quantidade = parseInt(prompt("Quantos ingredientes você quer adicionar?"));
var contador = 1;

while(contador <= quantidade) {

    var novoIngrediente = prompt("informe o ingrediente " + contador);
    var achou = false;

    for(var posicao = 0; posicao < ingredientes.length; posicao++) {

        if(ingredientes[posicao] == novoIngrediente) {

            achou = true;
            break;
        }
    }
    if(achou === false) {

        ingredientes.push(novoIngrediente);
        contador++;
    }
}

for(var i = 0; i < ingredientes.length; i++) {
    document.write(ingredientes[i] + ", ");
}