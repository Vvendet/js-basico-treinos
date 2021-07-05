//if...else

function calcularMedia(array){
    let nota = 0
    let media
    for (elements of array){
        nota += elements
        
    }
    media = nota/array.length > 6 ? "aprovado" : "reprovado" //########### OPERADOR TERNARIO
    return media
}

let arrays = [10,10,10,10]
console.log(calcularMedia(arrays))