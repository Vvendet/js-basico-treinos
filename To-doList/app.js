'use strict';

let banco = []

const criarItem = (nome,check=' ',indice) => {
    const item = document.createElement('label')
    item.classList.add("todo__item")
    item.innerHTML = `
    <input type="checkbox" ${check} data-indice=${indice}>
    <div>${nome}</div>
    <button data-indice=${indice}><img src="https://image.freepik.com/icones-gratis/lixo_318-10194.jpg" width="20px" height="20px" data-img="apagar"></button>`
    document.getElementsByClassName("todo__list")[0].appendChild(item)
}
const removerItem = (indice) => {
    banco.splice(indice,1)
    render()

}
const limparRender = () => {
    const todolist = document.getElementsByClassName("todo__list")
    while (todolist[0].firstChild) {
        todolist[0].removeChild(todolist[0].lastChild)
    }
}
const render = () => {
    limparRender()
    banco.forEach((item, indice) => criarItem(item.tarefa,item.check,indice))

}
const inserirItem = (evento) => {
    const tecla = evento.key
    
    let addItem = evento.target
    if (tecla === 'Enter'){
        if (addItem.value === ''){return}
        banco.push({'tarefa': addItem.value, 'check': ''})
        render()
        addItem.value = ''
}}

const clickItem = (evento) => {
    const elemento = evento.target
    console.log(elemento)
    if (elemento.dataset.img === 'apagar'){
        const indice = elemento.dataset.indice
        removerItem(indice)
    } 

}
document.getElementById('newitem').addEventListener('keypress', inserirItem)
let doc = document.getElementsByClassName('todo__list')
doc[0].addEventListener('click', clickItem)

render()
