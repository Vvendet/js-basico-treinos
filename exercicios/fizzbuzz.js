
var numero = parseInt(prompt("Digite um número: "))
var div3 = parseInt(numero%3)
var div5 = parseInt(numero%5)


if (numero >= -99999999999999999999999 && div3 === 0 && div5 === 0){
    document.write(`<h1>FIZZBUZZ</h1><br><h3>O número ${numero} é divisível por 3 e 5! </h3>`)
}else if (numero >= -99999999999999999999999 && div3 === 0){
    document.write(`<h1>FIZZ</h1><br><h3>O número ${numero} é divisível por 3</h3>`)
}else if (numero >= -99999999999999999999999 && div5 === 0){
    document.write(`<h1>BUZZ</h1><br><h3>O número ${numero} é divisível por 5</h3>`)
}else if (numero >= -99999999999999999999999 && div3 != 0 && div5 != 0){
    document.write(`<h1>MEEH</h1><br><h3>O número ${numero} não é divisível nem por 3 nem por 5</h3>`)
}else{
    document.write("<h1>ERROR</h1><h3>O dado digitado não é válido para a operação</h3>")
}