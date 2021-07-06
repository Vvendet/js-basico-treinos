const livros = require('./database')

// pegar um input do usuário "Quer pegar livro por categoria?"
const readLine = require('readline-sync')

const entrada_inicial = readLine.question("Quer pegar um livro? S or N")

if (entrada_inicial.toLocaleUpperCase() === 'S'){
    console.log("Eis as categorias:")
    console.log("Classicos / ficção / distopia")

    const escolha_categoria = readLine.question("Qual categoria você escolhe?")
    const retorno = livros.filter(livros => livros.categoria === escolha_categoria)
    console.table(retorno)
}else{
    console.log("Eis todos os livros disponíveis")
    const livros_ordenados = livros.sort((a,b)=>a.publicacao - b.publicacao)
    console.table(livros_ordenados)
}

