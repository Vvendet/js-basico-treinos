// o programa irá pedir ao usuário um número de 1 a 10
//será retornado, então, uma tabela com toda a tabuada de 1 a 10 do numero escolhido
//caso ele queira, será retornada toda a tabuada
const readLine = require('readline-sync')

var tabuada = [
    {
        index: 0,
        tabuada: [],
    },
    {
        index: 1,
        tabuada: [],
    },
    {
        index: 2,
        tabuada: [],
    },
    {
        index: 3,
        tabuada: [],
    },
    {
        index: 4,
        tabuada: [],
    },
    {
        index: 5,
        tabuada: [],
    },
    {
        index: 6,
        tabuada: [],
    },
    {
        index: 7,
        tabuada: [],
    },
    {
        index: 8,
        tabuada: [],
    },
    {
        index: 9,
        tabuada: [],
    },
    {
        index: 10,
        tabuada: [],
    },


]


function geraTabuada(numero){
    for (let i = 0; i<11;i++){
        let res = numero*i
        console.log( `${numero} x ${i} = ${res}`)
    }
}

function geraTabuadaToda(numero){
    for (let i = 0; i<11;i++){
        let res = numero*i
        return( `${numero} x ${i} = ${res}`)
    }
}
function pegarNumero(){
    console.log("Digite o número que deseja ver sua tabuada: ")
    const numero = readLine.question("")
    geraTabuada(numero)
    
}

function inicio(){
    console.log("Bem-vindo!")
    console.log("Deseja visualizar a tabuada de algum numero específico? S or N ")
    const escolha = readLine.question("")
    if (escolha.toLocaleUpperCase() === 'S'){
        pegarNumero()
    }else{
        for (let a = 0; a < tabuada.length; a++){
            for (let b = 0; b < 11; b++){
                let res = a*b
                tabuada[a].tabuada.push(`${a} x ${b} = ${res}`) 
            }  
        }
        console.table(tabuada)
        
    }
}
inicio()