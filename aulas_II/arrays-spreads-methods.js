//acessar informações do array
let array = [1,2,3,4,5,6,7,8]

//usar operador spread (...)

let novoArray = [...array,"novo item"]

//copiei o vetor array e adicionei novo item

//metodos de iteração

for (let i = 0; i < novoArray.length; i++){
    console.log(novoArray[i])
}

//novo metodo

novoArray.map(aluno = () => console.log(aluno))//recebe como parametro um callback

//outro novo metodo

const impares = novoArray.filter(filtro => typeof(filtro) === "number" && filtro%2 != 0)
console.log(impares)

//ordenar de forma crescente
console.log(novoArray.sort())

//decrescente
novoArray2 = novoArray.sort((a,b) => b-a)

//metodo reduce

//reduz nosso array a um resultado de uma operação matemática
let numerosTodos = [2,3,5,6,7,8,9,2]
let soma_TodosNumeros = numerosTodos.reduce((valoranterior, valoratual)=>{
    return valoranterior + valoratual
}, 0)
console.log(soma_TodosNumeros)
