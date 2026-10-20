alert("Boas vindas ao nosso site!");
let numeroSecreto = 5;
let chute = prompt("Escolha um número entre 1 e 10:");

if(chute == numeroSecreto){
    alert("Isso aí! Você descobriu o número secreto!");
}
else {
    alert("Você errou! O número secreto era " + numeroSecreto);
}