let num1 = parseInt(prompt("Digite o primeiro numero"))
let num2 = parseInt(prompt("Digite o segundo numero"))
let operacao = parseInt(prompt("Escolha a operacao que deseja realizar:"
+ "\n1 = +; \n2 = -; \n3 = *; \n4 = /"))

switch (operacao) {
    case 1:
      console.log(num1 + " + " + num2 + " = " + (num1 + num2))
      break;
    case 2:
       console.log(num1 + " - " + num2 + " = " + (num1 - num2))
       break;
    case 3:
       console.log(num1 + " * " + num2 + " = " + (num1 * num2))
       break;
     default:
        console.log(num1 + " / " + num2 + " = " + (num1 / num2))
        break;
    }