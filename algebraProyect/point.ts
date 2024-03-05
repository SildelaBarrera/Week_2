// Reto 4: Clase Point con Typescript
// 1. Trabajar en la rama repaso4, crear una nueva carpeta denominada algebraProject y crear el
// fichero point.ts.
// 2. Dicho fichero debe contener la clase Point con los siguientes atributos privados:
// • x: number
// • y: number
// 3. El constructor de la clase debe tener los mismos parámetros de entrada que atributos.
// 4. Crear los métodos setters y getters para todos los atributos de la clase.
// 5. Crear un método toString() que convierta a texto las coordenadas del punto. Debe devolver: “(x,y)”

export class Point{

    private x: number;
    private y: number;

    constructor(x, y){

        this.x = x;
        this.y = y;
    }

    public setX (x:number){
        this.x = x;
    }
    public getX(){
        return(this.x);
    }
    public setY (y:number){
        this.y = y;
    }
    public getY(){
        return(this.y);
    }
    public toString(){
        return ( "("+ this.x + "," + this.y + ")" )
    }
    public distanceToOrigin(){
        
        let originX: number = 0;
        let originY: number = 0;

        let distance = Math.sqrt(Math.pow(this.x - originX, 2) + (Math.pow(this.y - originY, 2)))
        return(distance);
    }
    public calculateDistance(anotherPoint: Point){

        let distance1 = Math.sqrt(Math.pow(this.x - anotherPoint.x, 2) + (Math.pow(this.y - anotherPoint.y, 2)))
        return(distance1);
    }
    public calculateQuadrant(){

        
        if(this.x == 0 && this.y == 0){
           return 0;
        }
        if(this.x > 0 && this.y > 0){
            return 1;
        }
        if(this.x < 0 && this.y >0){
           return 2;
        }
        if(this.x < 0 && this.y < 0){
            return 3;
        }
        if(this.x > 0 && this.y < 0){
            return 4;
        }
    }
    
    public calculateNearest(points: Point[]):Point{

        let menorDistance: number = this.calculateDistance(points[0]);
        let indice: number = 0;

        for(let i = 0; i < points.length; i++ ){

            if (this.calculateDistance(points[i]) < menorDistance){
                menorDistance = this.calculateDistance(points[i])
                indice = i;    
                }       
        }
        return(points[indice]) 
    }   
}






