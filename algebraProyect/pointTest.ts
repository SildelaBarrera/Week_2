// 6. En otro fichero denominado pointTest.ts importar la clase Point.
// 7. Crear un nuevo objeto myPoint de la clase Point, en el fichero pointTest.ts, y probar todos sus
// métodos. Subir los cambios a GitHub.

import {Point} from "./point"

let point1 = new Point(8,5);

point1.setX(9);
console.log(point1.getX());
point1.setY(-3);
console.log(point1.getY());
console.log(point1.toString());

console.log(point1.distanceToOrigin());

let anotherPoint = new Point(10, 18);
console.log(point1.calculateDistance(anotherPoint));

console.log(point1.calculateQuadrant());

let point2 = new Point(21, -18);
let point3 = new Point(16, 2);
let point4 = new Point(-7, -11);
let point5 = new Point(-9, 0)

let arrayPoints: Point[] = [point2, point3, point4, point5];

console.log(point1.calculateNearest(arrayPoints))
