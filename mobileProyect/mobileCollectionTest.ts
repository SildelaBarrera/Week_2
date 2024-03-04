// 5. En otro fichero denominado mobileCollectionTest.ts importar la clase MobileCollection.
// 6. En dicho fichero crear 4 objetos de la clase Mobile y un array que los contenga.
// 7. Crear un objeto myCollection de la clase MobileCollection, asignarle el array que habéis creado
// previamente y comprobar todos sus métodos.
// 8. Subir los cambios a GitHub.

import {Mobile} from "./mobile"
import {MobileCollection} from "./mobileCollection"

let mobile1 = new Mobile("ZTE A52", "ZTE", "A52", "Blanco", 80);
let mobile2 = new Mobile("Dual SIM", "Nokia", "106", "Negro", 35);
let mobile3 = new Mobile("S10 plus", "Samsung", "10", "Gris", 300);
let mobile4 = new Mobile("Iphone 13", "Iphone", "13", "Azul", 600);

let arrayMobiles: Mobile[] = [mobile1, mobile2, mobile3, mobile4];
let mobileCollection1 = new MobileCollection(arrayMobiles, 0);

console.log(mobileCollection1.getMobiles())

console.log(mobileCollection1.getTotalPrice());

mobileCollection1.printCollection();

