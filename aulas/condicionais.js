var numero = 1
if (numero === 3-2){
    document.write("Estamos aqui executando um if")
}else{
    document.write("Não conseguimos executar o comando if")
}

var mase = "janeiro"
switch(mase){
    case "fevereiro":
        document.write("<br>estamos no mes "+mase)
        break
    case "janeiro":
        document.write("<br>Estamos no mes "+mase)
        break    
    case "oi mano n vai vir aq":
        document.write("<br>Estamos sem emses")
        break
    default:
        document.write("<br>Nenhum dos casos atendidos")
}   