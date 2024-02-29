//Reto 3
//Probar la clase contacts en un fichero denominado contactsTest.ts

import { Person } from "./person"
import {Contacts} from "./contacts"

let cont1 = new Contacts();

let pers1 = new Person("Lucía", 25, "Calle Vista Bella, 2")
let pers2 = new Person("Adriana", 21, "Calle Lisboa 14")
let pers3 = new Person("Gabriela", 16, "Calle Paz, 33")

cont1.people.push(pers1, pers2, pers3);
console.log(cont1.printCalendar());