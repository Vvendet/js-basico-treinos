let evento = document.getElementById('screen')
let calculadora = document.getElementById("table")
let numeros = ['1','2','3','4','5','6','7','8','9','0']
let operadores = document.querySelectorAll("[data-operador]")

var n1 = []
let percent = [range(620, 727), range(254,300)]
let soma = [range(512,617),range(311,364)]
let mult = [range(731,835), range(311,364)]
let division = [range(731,835), range(244,300)]
let sub = [range(620,727), range(311,364)]
let manos = [soma,percent,mult,division,sub]
let operacao = []
let resultado = []
let operation = ''

function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

const limparTopo = () => {
    operacao = []
    evento.innerHTML = ''
}
const processaOperacao = (acao) => {
    
    
    console.log(acao)
    for (let man = 0; man < manos.length; man++){
        for (let mans = 0; mans < manos[man][0].length; mans++){
            if (acao.screenX === manos[man][0][mans]){
                for (let manss = 0; manss < manos[man][1].length; manss++){
                    if (acao.screenY === manos[man][1][manss]){
                        operation = man

                    }
                }
            }
        }
    }
    n1 = operacao
    operacao = []
    limparTopo()
    
    
}

const igualdade = () => {
    
    n1 = parseInt(n1.join(""))

    let n2 = []
    n2 = operacao
    operacao = []
    console.log(n2)
    n2 = parseInt(n2.join(""))
    
    
    
    if (operation === 0){
        console.log("Soma")
        evento.innerText = n1 + n2
        operacao.push(evento.innerText)
        return
    }
    if (operation === 4){
        console.log("Subtrair")
        evento.innerText = n1 - n2
        operacao.push(evento.innerText)
        return
    }
    if (operation === 2){
        console.log("Multiplicação")
        evento.innerText = n1 * n2
        operacao.push(evento.innerText)
        return
    }
    if (operation === 3){
        console.log("Divisão")
        evento.innerText = n1/n2
        operacao.push(evento.innerText)
        return
    }
    if (operation === 1){
        console.log("Percent")
        evento.innerText = n1 * n2 / 100
        operacao.push(evento.innerText)
        return
    }
}
const recebeNumero = (eventt) => {
    
    const numero = eventt.target
    
    
    if (numero.innerHTML === "AC"){
        limparTopo()
        return
    }
    if (evento.innerText.length === 20){
        return
    }
    for (let i = 0; i < numeros.length; i++){
        if(numero.innerHTML == numeros[i]){
            
            evento.innerHTML += numero.innerHTML
            operacao.push(numero.innerHTML)
            return
        }
        
        
        if (numero.innerHTML === "="){
            igualdade()
            return
        }

        }
    }

for (let o = 0; o < operadores.length; o++){
    operadores[o].addEventListener('click', processaOperacao)
}

calculadora.addEventListener('click',recebeNumero)
