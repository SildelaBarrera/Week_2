//Reto 5: Probar la Clase Book
//1. Guardar la clase Book en un fichero con extensión .ts (book.ts).
//2. Modificar ese fichero para exportar la clase.
//- export class Book
//3. Importar la clase en otro fichero denominado bookTest.ts.
//- import { Book } from "./book”
//4. Crear un Objeto de la clase Book y probar todos sus atributos y métodos.

import { Book } from "./book"

let book1 = new Book("La isla del tesoro", 168, "9788466794992", "Robert Louis Stevenson", "Anaya");

console.log(book1.toString());

book1.setTitle("Juego de Tronos");
console.log(book1.getTitle());

book1.setNPages(800);
console.log(book1.getNPages());

book1.setIsbn("9788401032424");
console.log(book1.getIsbn());

book1.setAuthor("George R. R. Martin");
console.log(book1.getAuthor());

book1.setEditorial("Gigamesh");
console.log(book1.getEditorial());

console.log(book1.toString());