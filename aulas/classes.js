//a linguagem js aceita POO tranquilamente respeita
class Book {
    constructor(title, author, pages){
        this.title = title
        this.author = author
        this.pages = pages
    }
    readBook(){
        return `Estou lendo ${this.title} de ${this.author}`
    }
}
class Lib extends Book{
    constructor(title, author, pages, total){
        super(title, author, pages)
        this.total = total
    }
}
class Person {
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }

}
let person = new Person(nome)
console.log(person.name)

let biblioteca = new Lib(["Admirável Mundo Novo", "ASsim falava Zaratustra"],
                        ["NIetzsche","naosei"],
                        [500,100],
                        "2")
let book = new Book("Admimirável mundo novo", "naosei", 500)
let otherBook = new Book("Assim falava Zaratustra", "Frederitch Nietzsche", 200)

document.write(book.readBook())
document.write("<br>" + otherBook.readBook())
document.write("<br>" + biblioteca.total)