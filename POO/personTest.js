let myClass = require("./person");


let per1 = new myClass.Person("Ismael", 30, "Soria", 1.73, 80, 1994, ["escalada", "música", "videojuegos"]);

console.log(per1.nombre);
console.log(per1.edad);
console.log(per1.localidad);
console.log(per1.altura);
console.log(per1.peso);
console.log(per1.yearOfBirth);
console.log(per1.hobbies);

per1.calculoIMC();

per1.calculoEdad(2024);

per1.printAll();

per1.printHobbies();