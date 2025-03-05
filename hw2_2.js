class Book {
    #title;
    #author;
    #isAvailable;

    constructor(title, author){
        this.#title=title;
        this.#author=author;
        this.#isAvailable=true;
    }
    
    getTitle(){
        return this.#title;
    }
    getAuthor(){
        return this.#author;
    }
    isAvailable(){
        return this.#isAvailable;
    }
    checkoutBook(){
        this.#isAvailable=false;
    }
    
};
class Library {
    books;

    constructor(){
        this.books=[];
    }
    addBook(book){
        this.books.push(book);
    };
    checkoutBook(title){
        for (let i =0; i< this.books.length; i++){
            if (this.books[i].getTitle()===title){
                this.books[i].checkoutBook();
                console.log(` Ви взяли книгу "${this.books[i].getTitle()}" автора ${this.books[i].getAuthor()}`)
                
            }
        }
    };
    viewAvailableBooks(){
        console.log('Доступні книги: ');
        for (let i =0; i< this.books.length; i++){
            if (this.books[i].isAvailable()===true){
                console.log(` - "${this.books[i].getTitle()}" автора ${this.books[i].getAuthor()}`);
            }
        }
        
    }
};

const myLibrary = new Library();
const book1 = new Book("Контопська Відьма", "Григорій Квітка-Основ'яненко");
const book2 = new Book("1984", "Джордж Орвелл"); 
const book3 = new Book("Великий Гетсбі", "Ф. Скотт Фіцджеральд"); 

myLibrary.addBook(book1);
myLibrary.addBook(book2); 
myLibrary.addBook(book3);
myLibrary.viewAvailableBooks();
myLibrary.checkoutBook("1984");
myLibrary.viewAvailableBooks();

// console.log(book1.getAuthor())