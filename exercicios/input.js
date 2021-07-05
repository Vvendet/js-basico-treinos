const entrada = document.getElementById("entrada")
const campo = document.getElementById("estilo")
const corpor = document.getElementById("corpor")
let fundo_fora = `<style> #entrada{
    background-color: white;
}</style>`

let quantidade = []

const mudarCor = (evento) => {
    campo.innerHTML = `<style> #entrada{
        background-color: yellow;
    }</style>`
}


const fazer = (evento) => {
    console.log(evento.key)
    quantidade.push(evento.key)
    
}
function teste(){
    console.log("teste")
    if (entrada.value.length >= 3){
        campo.innerHTML = `<style> #entrada{
            background-color: green;
        }</style>`
    }else{
        campo.innerHTML = `<style> #entrada{
            background-color: red;
        }</style>`
    }
}

entrada.addEventListener("click", mudarCor)
entrada.addEventListener("keypress", fazer)


    