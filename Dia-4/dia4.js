let fome = false
let dinheiro = false
let restauranteAberto = false

let opcaoFome = prompt("Você esta com fome? (s/n)")
if (opcaoFome == "s") {
    fome = true
}
let opcaoDinheiro = prompt("Você tem dinheiro? (s/n)")
if (opcaoDinheiro == "s") {
    dinheiro = true
}
let opcaoRestaurante = prompt("O restaurante está aberto? (s/n)")
if (opcaoRestaurante == "s") {
    restauranteAberto = true
}

if (!fome || !dinheiro) {
    console.log("A janta será em casa hoje")
} else if (fome && dinheiro && !restauranteAberto){
    console.log("Peça um delivery!")
} else {
    console.log("Hoje a janta será no restaurante!")
}