//Guardar la clase Person en un fichero con extensión .ts (person.ts).
//Modificar ese fichero para exportar la clase.
// export class Person
//Importar la clase en otro fichero denominado personTest.ts.
// import { Person } from "./person”
//Crear un Objeto de la clase Person y probar todos sus atributos y métodos.

import { Person } from "./person"

let per1 = new Person("Juliana", 5, "Calle Italia, 10")

console.log(per1.name);
console.log(per1.age);

per1.printName();
console.log(per1.yearOfBirth(2024));
console.log(per1.getAddress());
per1.setAddress("Calle Bélgica, 11");
console.log(per1.getAddress());