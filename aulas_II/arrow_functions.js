//arrow functions
//funções escritas como funções anonimas
//geralmente usadas para callbacks

//exemplo antigo
function printar(array){
    for (elementos of array){
        console.log(elementos)
    }
}

//exemplo função arrow
const somar = (num1, num2) => num1 + num2
//como tem apenas uma linha, n precisa de abrir escopo

const printar = (array) => {
    for (elementos of array){
        console.log(elementos)
    }
} 
