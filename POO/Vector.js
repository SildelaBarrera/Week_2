// Reto 1
// Crea una nueva clase llamada Vector con un único atributo que es un array de números y
// los siguiente métodos:
// 1. Constructor(n, m): Crea un array de n números aleatorios que van desde 0 hastam.
// 2. add(a): Suma el array a con el array de la clase vector si y solo si tienen el mismo
// numero de elementos.
// 3. productNum(n): Multiplica el array de la clase vector por el numero n.
// 4. subs(a): Resta el array a con el array de la clase vector si y solo si tienen el mismo
// numero de elementos.
// 5. product(a): Multiplica el array a con el array de la clase vector si y solo si tienen el
// mismo número de elementos.
// Crea un nuevo fichero que llame testVector y prueba la clase Vector.

class Véctor{

    constructor(n, m){
        this.array = [];
        for(let i=0; i < n; i++){
            this.array.push(Math.round(Math.random()*m))
          }

    }
    add(arrayA){
        
        let vAdd = [];
        if(this.array.length == arrayA.length){
        
            for (let i=0; i < this.array.length; i++){
            vAdd[i] = this.array[i] + arrayA[i];
            }
        }
        return (vAdd); 
    }

    productNum(num){
        
        let vProductNum = [];
        for (let i=0; i < this.array.length; i++){
            vProductNum.push(this.array[i] * num);
        }
        return (vProductNum);

    }
    subs(arrayS){
        
        let vSubs = [];
        if(this.array.length == arrayS.length){
        
            for (let i=0; i < this.array.length; i++){
            vSubs[i] = arrayS[i] - this.array[i];
            }
        }
        return (vSubs); 
    }
    product(arrayP){
        
        let vProd = [];
        if(this.array.length == arrayP.length){
        
            for (let i=0; i < this.array.length; i++){
            vProd[i] = arrayP[i] * this.array[i];
            }
        }
        return (vProd); 
    }
}

module.exports= {Véctor}