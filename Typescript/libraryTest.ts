import { Book } from "./book"
import { Library } from "./library"

let book1 = new Book("La isla del tesoro", 168, "9788466794992", "Robert Louis Stevenson", "Anaya");
let book2 = new Book("Caraval", 432, "9788408169239", "Stephanie Garber", "Planeta");

let library:Book[]=[];
library.push(book1, book2);

let librery1 = new Library(library, "Pasillo 3", "Pedro")

librery1.setAddress("Pasillo 4")
console.log(librery1.getAddress());

librery1.setManager("María");
console.log(librery1.getManager());

console.log(librery1.toString())

console.log(librery1.getNumberOfBooks())

console.log(librery1.findByAuthor("Robert Louis Stevenson"))