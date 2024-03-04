// 1. Guardar estos retos en un nuevo fichero. Ej: buclesWhile.ts
// 2. Realizar una función que te devuelva si existe un numero par en el array de números que
// introduces como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums)

function hasEven(myNumbs: number[]){

    let i = 0
    let newArray: number[] = []

    while(i < myNumbs.length){

        if(myNumbs[i] % 2 == 0){
            newArray.push(myNumbs[i])   
        }
        i++;
    }
    return("Números pares en el array: " + newArray)
}
console.log(hasEven([24, 17, 1, 8, 36, 44, 9, 82, 11]));

// 3. Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si
// todos los nombres empiezan por M.
// La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames)
// 4. Subir los cambios a GitHub.

function startWithM (myNames: string[]){

    let resultado: boolean = true
    for(let i=0; i < myNames.length; i++){

        if(myNames[i][0] != "M"){
           resultado = false
        }
    }
    return(resultado)
}

console.log(startWithM(["Mónica", "Michael", "Mary"]))
