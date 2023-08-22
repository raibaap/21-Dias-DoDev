let numero = parseInt(prompt("Digite um número inteiro e positivo"))
for (let contador = numero; contador <= numero + 2; contador++) {
    console.log("Tabuada do número: " + contador)
    for (let multiplicador = 0; multiplicador <=10; multiplicador++) {
        console.log(contador + " X " + multiplicador + " = " + (contador * multiplicador))
    }
}