// Reto 5: Clase Triangle con Typescript
// 1. Dentro de la carpeta actual crear el fichero triangle.ts. Importar en dicho fichero la clase Point.
// 2. Dicho fichero debe contener la clase Triangle con los siguientes atributos privados:
// • vertex1: Point
// • vertex2: Point
// • vertex3: Point
// Que corresponden a los vértices de un triángulo.
// 3. El constructor de la clase debe tener los mismos parámetros de entrada que atributos.
// 4. Programa el método calculateLengthSides() : number[] que debe devolver un array de tres posiciones,
// cada una de las cuales debe ser la longitud de uno de los lados del triángulo.
// NOTA: Para ello es importante usar el método calculateDistance de la clase Point.
// 5. En otro fichero denominado triangleTest.ts importar la clase Triangle.
// 6. Crear un nuevo objeto myTriangle de la clase Triangle, en el fichero anterior, y probar todos sus
// métodos. Subir los cambios a GitHub. Haced merge con la rama main.

import {Point} from "./point"

export class Triangle{

    private vertex1: Point;
    private vertex2: Point;
    private vertex3: Point;

    constructor(vertex1, vertex2, vertex3){

        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }

    public calculateLengthSides(): number[] {

        let side: number[] = [];
        let arrayPoints: Point[] = [this.vertex1, this.vertex2, this.vertex3];

        side.push(this.vertex1.calculateDistance(this.vertex2))
        side.push(this.vertex2.calculateDistance(this.vertex3))
        side.push(this.vertex1.calculateDistance(this.vertex3))
        
        return(side)       
    }
}




