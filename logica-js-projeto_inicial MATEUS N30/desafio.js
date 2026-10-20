
alert("Boas vindas ao nosso site!");

let nome = "lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

let nomeDoUsuario = prompt("Qual é o seu nome?");
idade = prompt("Digite a sua idade:");

let mensagemDeErro = "Erro! Preencha todos os campos";

if (nomeDoUsuario == "" || idade == ""){
    alert(mensagemDeErro)
} else {
if (idade >= 18){
    alert("Pode tirar a habilitação!");
} else {
    alert("Você ainda não tem idade para tirar a habilitação.");
}
}



