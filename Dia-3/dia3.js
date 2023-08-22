let nomeDoUsuario = prompt("Insira o seu nome");
let idade = parseInt(prompt("Digite a sua idade"));
let altura = parseFloat(prompt("Digite a sua altura"));
let peso = parseFloat(prompt("Digite o seu peso"));
let anoDeNascimento = 2023 - idade;
let IMC = peso / (altura * altura);
console.log("Olá, " + nomeDoUsuario + "! Você tem " + idade + " anos, nasceu em " + anoDeNascimento + ", tem " + altura + " metros de altura, pesa " + peso + " kg. Seu IMC é " + IMC.toFixed(2) + " Kg/m².");