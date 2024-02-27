//Reto 6
//Guardar la clase Person en un fichero con extensión .js (person.js). 
//Modificar ese fichero para exportar la clase.
//Importar la clase en otro fichero denominado personTest.js.
//Crear un objeto de la clase Persona y probar todos sus atributos y métodos.
//Sube todos los cambios a tu rama “dia1”.


let {Person} = require("./person");


let per1 = new Person("Ismael", 30, "Soria", 1.73, 80, 1994, ["escalada", "música", "videojuegos"]);

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