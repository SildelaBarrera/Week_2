// 1. Guardar estos retos en un nuevo fichero. Ej: buclesFor.ts
// 2. Realizar una función que imprima los números impares existentes hasta el número
// indicado como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num)

function evenNumbers(num:number){

    let arrayNumbers: number[] = [];
    let arrayEven: number[] = [];

    for(let i=0; i < num; i++){
       arrayNumbers.push(i)       
    }

    for(let i=0; i < arrayNumbers.length; i++){

        if(arrayNumbers[i] % 2 == 0){
            arrayEven.push(i)
        }
    }
    return(arrayEven)
}

console.log(evenNumbers(19));

// 3. Realizar una función que como parámetro de entrada reciba un array de strings y como
// salida devuelva el array revertido. No se puede utilizar el método revert de la clase array
// La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)

function myRevert(myArr: string[]){

    let newArray: string[] = []

    for(let i=0 ; i < myArr.length; i++){
        
        newArray.push(myArr[(myArr.length -1)- i]);    
    } 
    return(newArray)
}
console.log(myRevert(["mañana", "mediodía", "tarde", "noche"]))


// 4. Realizar una función que reciba como parámetro un array de strings que contenga
// nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)

function isRainbow(colors: string[]){

    let arrayRainb: string[] = ["Rojo", "Naranja", "Amarillo", "Verde", "Añil", "Azul", "Violeta"];

    for(let i =0; i < colors.length; i++){

        if (arrayRainb.includes(colors[i]) == true) {
            console.log("El color " + colors[i] + " sí se encuentra en el arcoiris");
        }
        else {
            console.log("El color " + colors[i] + " no está en el arcoiris");
        }
    }
}
isRainbow(["Violeta", "Rosa", "Gris", "Amarillo"])

// 5. Realizar una función que te devuelva la suma del numero de caracteres de las palabras
// almacenadas en un array.
// La cabecera de la función tendrá el siguiente aspecto: function add(myWords)

function add(myWords: string[]){

    let suma: number = 0;
    
    for(let i = 0; i < myWords.length; i++){

        suma += (myWords[i]).length
    }
return (suma);
}

console.log(add(["Sol", "Mar", "Sal", "Luz" ]))

// 6. Subir los cambios a GitHub