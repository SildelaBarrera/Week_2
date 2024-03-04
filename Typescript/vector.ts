//Reto 8: Clase Vector
//Crear la Clase Vector con la siguiente estructura:
// • Atributo Privado:
// - elements: array of numbers.
// • El Constructor debe contener los siguientes parámetros:
// - n: number. Longitud del vector.
// - k: number. Máximo valor de los elementos del vector.
// Este constructor tiene que crear el atributo elements formado por n números aleatorios entre 0 y k.
// • Metodos Públicos:
// - print(). Imprime por consola el vector.
// - add(v1:Vector):Vector. Realiza la suma de elements con v1.
// - subs(v1:Vector):Vector. Realiza la resta de elements con v1.
// - mult(v1:Vector):Vector. Realiza el producto de elements y v1.
// - multNumber(n:number):Vector. Realiza el producto entre elements y el número n.

class Vector
{
    private elements: number[];

    constructor(n: number, k: number){
        this.elements = [];
        for(let i=0; i < n; i++){
          this.elements.push(Math.round(Math.random()*k))
        }
    }
    public print(){
        console.log(this.elements);
    }
    public add(v1:Vector):Vector{

        let v2 = new Vector (0,0);
        for (let i=0; i < this.elements.length; i++){

            v2.elements.push(this.elements[i] + v1.elements[i]);
        }
        return v2;
    } 
    public subs(v1:Vector):Vector{
        
        let v2 = new Vector(0,0);
        for (let i=0; i < v1.elements.length; i++){
            v2.elements.push(this.elements[i] - v1.elements[i]);
        }
        return v2;
    }
    public mul(v1:Vector):Vector{

        let v2 = new Vector(0,0);
        for (let i=0; i < v1.elements.length; i++){
            v2.elements.push(this.elements[i] * v1.elements[i]);
        }
        return v2;
    }
    public multNumber(n:number):Vector{

        let v2 = new Vector(0,0);
        for (let i=0; i < v1.elements.length; i++){
            v2.elements.push(this.elements[i] * n);
        }
        return v2;
    }
}

let v1 = new Vector(4, 10);
let v3 = new Vector(4, 5);

console.log(v1);
console.log(v3);
console.log(v3.add(v1));
console.log(v3.subs(v1));
console.log(v3.mul(v1));
console.log(v3.multNumber(2));
