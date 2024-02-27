let {Person} = require("./person");
let {Contacts} = require("./contacts");

let contacto1 = new Contacts()
let persona1 = new Person("Ismael", 30, "Soria", 1.73, 80, 1994, ["escalada", "música", "leer"])
let persona2 = new Person("Elena", 28, "Segovia", 1.63, 58, 1996, ["cine", "tenis", "cocina"])
let persona3 = new Person("Sandra", 33, "Salamanca", 1.71, 65, 1990, ["dibujar", "nadar", "tocar el piano"])
contacto1.objetos.push(persona1, persona2, persona3)

console.log(contacto1.printPersons());