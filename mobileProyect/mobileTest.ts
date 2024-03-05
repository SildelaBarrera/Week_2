// 4. En otro fichero denominado mobileTest.ts importar la clase Mobile.
// 5. Crear un nuevo objeto myMobile de la clase Mobile, en el fichero mobileTest.ts, y probar
// todos sus métodos.
// 6. Subir los cambios a GitHub.

import {Mobile} from "./mobile"

let mobile1 = new Mobile("ZTE A52", "ZTE", "A52", "Blanco", 80);

console.log(mobile1);

mobile1.setName("Redmi Note")
console.log(mobile1.getName())

mobile1.setTrademark("Xiaomi")
console.log(mobile1.getTrademark())

mobile1.setModel("Note 10")
console.log(mobile1.getModel())

mobile1.setColor("Negro")
console.log(mobile1.getColor())

mobile1.setPrice(150)
console.log(mobile1.getPrice())

mobile1.printMobile();

// Crear tres objetos de la clase Mobile en el fichero mobileTest.ts.

let mobile2 = new Mobile("Dual SIM", "Nokia", "106", "Negro", 35);
let mobile3 = new Mobile("S10 plus", "Samsung", "10", "Gris", 300);
let mobile4 = new Mobile("Iphone 13", "Iphone", "13", "Azul", 600);

// Crear un array denominado myMobiles en el fichero mobileTest.ts que tendrá los tres
// objetos creados en el punto 2.
// Mostrar los datos de myMobiles invocando al método del punto 1.
// Subir los cambios a GitHub. Y hacer merge con la rama principal.

export let myMobiles: Mobile[] = [mobile2, mobile3, mobile4];

for (let mobile of myMobiles){
    mobile.printMobile()
}