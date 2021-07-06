const pessoa = {
    nome: "JUlio",
    idade: "18",
    cidade: "São Paulo"

}
//notação de pont

console.log(pessoa.nome) // JUlio

//notação de colchetes

console.log(pessoa['cidade']) // São Paulo

//desestruturando

const {nome, idade, cidade} = pessoa
console.log(nome) //JUlio
console.log(idade)

////////////////////////////////////////////////////////////////////////

const filmes = [
    {
        titulo:"Quando Nietzsche" ,
        autor:"Nietzsche" ,
        diretor:"Alguem" ,
    },
    {
        titulo:"Quasdae" ,
        autor:"sim " ,
        diretor:"Alguem" ,
    },
    {
        titulo:"Qoioi" ,
        autor:"n sei" ,
        diretor:"Alguem" ,
    },
]
const {titulo, direto, autor} = filmes

filmes.map(filme => console.log(filme.diretor))