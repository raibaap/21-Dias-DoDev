let nome = prompt("Digite seu nome")
let cpf = prompt("Digite seu CPF")
let operacao
let valor = 0
let saldo = 100
let maiorValor = 0
let mediaValores = 0
let contador = 0
let continuar = 1

do {
  operacao = prompt("Insira a operação desejada (s/d)")
  valor = parseFloat(prompt("Digite o valor desejado"))
  mediaValores += valor
 
  if (valor > maiorValor) {
     maiorValor = valor
}

if (operacao == "s" && valor <= saldo){
    saldo -= valor
} else if (operacao == "s" && valor > saldo) {
    console.log("O valor inserido deve ser menor que o saldo")
} else {
    saldo += valor
}

contador++
console.log("Seu saldo é de: " + saldo)
console.log("O maior valor inserido foi: " + maiorValor)
console.log("A média dos valores foi: " + (mediaValores / contador))

continuar = parseInt(prompt("Voce deseja continuar? 1 - sim, 2 - nao"))

} while (continuar == 1)