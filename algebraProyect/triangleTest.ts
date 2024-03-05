// 5. En otro fichero denominado triangleTest.ts importar la clase Triangle.
// 6. Crear un nuevo objeto myTriangle de la clase Triangle, en el fichero anterior, y probar todos sus
// métodos. Subir los cambios a GitHub. Haced merge con la rama main.

import {Point} from "./point"
import {Triangle} from "./triangle"


let point1 = new Point(-6, 4);
let point2 = new Point(11, -2);
let point3 = new Point(1, 9);

let triangle1 = new Triangle(point1, point2, point3);

console.log(triangle1.calculateLengthSides())