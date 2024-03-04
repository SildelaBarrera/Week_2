//Reto 4: Clase Book
//Crear la Clase Book con la siguiente estructura:

export class Book
{
    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;

    constructor(title:string, nPages: number, isbn: string, author: string, editorial: string)
    {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }

    public setTitle(title:string): void{
        this.title = title;
    }
    public getTitle(){
        return(this.title);
    }
    public setNPages(nPages:number): void{
        this.nPages = nPages;
    }
    public getNPages(){
        return(this.nPages);
    }
    public setIsbn(isbn:string): void{
        this.isbn = isbn;
    }
    public getIsbn(){
        return(this.isbn);
    }
    public setAuthor(author:string): void{
        this.author = author;
    }
    public getAuthor(){
        return(this.author);
    }
    public setEditorial(editorial:string): void{
        this.editorial = editorial;
    }
    public getEditorial(){
        return(this.editorial);
    }
    public toString(): string {
        return(
        "Title - " + this.title +  " \nNumber of pages - " + this.nPages + " \nISBN - " 
        + this.isbn + " \nAuthor - " + this.author + " \nEditorial - " + this.editorial)
    }
    
}




