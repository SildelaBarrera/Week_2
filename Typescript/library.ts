//Reto 6: Clase Library
//Crear la Clase Library con la siguiente estructura:
import { Book } from "./book"

export class Library
{
    private books: Book[];
    private address: string;
    private manager: string;

    constructor(books, address, manager){

        this.books = books;
        this.address = address;
        this.manager = manager;
    }

    public setAddress(address: string): void {
        this.address = address
    }
    public getAddress(){
        return (this.address)
    }
    public setManager(manager: string): void {
        this.manager = manager 
    }
    public getManager(){
        return (this.manager)
    }
    public toString(): string {
        
        let phrase: string;
        phrase = "";

        for (let i=0; i < this.books.length; i++){

            phrase += " \nBook"+(i+1)+": \nTitle - "+ this.books[i].getTitle() +  " \nNumber of pages - " + this.books[i].getNPages() + " \nISBN - " 
            + this.books[i].getIsbn() + " \nAuthor - " + this.books[i].getAuthor() + " \nEditorial - " + this.books[i].getEditorial()
        }
        return(phrase)
    }
    public getNumberOfBooks(): number {
        return(this.books.length)
    }
    
    public findByAuthor (authorName: string) {
    
        for (let book of this.books){
            
            if(book.getAuthor() == authorName) {
                
                return (book)
            }
            else{
                return("No se ha encontrado ningún libro de ese autor")
            }
            

        }
    }   
}

