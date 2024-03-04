// Guardar este reto en un nuevo fichero. Ej: invocacion.ts
// Invocando a la función isEven y a la función add creadas en los retos anteriores.
//Indicar si es par o impar la suma de los caracteres de cada uno de los siguientes arrays:
// • [“Casa”, “Coche”, “Ciudad”, “Cesta”]
// • [“Barco”, “Baca”, “Bicicleta”, “Balon”, “Bisiesto”, “Brasil”]
// • [“Venezuela”, “Veneno”, “Voltaje”]
// Para ello tendrás que exportar dichas funciones en los ficheros correspondientes.
// También tendrás que importar dichos ficheros en el fichero actual.
// Subir los cambios a GitHub. Y hacer merge con la rama principal.

import {isEven} from "./condicionales"
import {add} from "./buclesFor"

let array1: string[] = ["Casa", "Coche", "Ciudad", "Cesta"];
let array2: string[] = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let array3: string[] = ["Venezuela", "Veneno", "Voltaje"]

let suma1 = add(array1)
let suma2 = add(array2)
let suma3 = add(array3)

console.log("Para el array1:") 
isEven(suma1);
console.log("Para el array2:") 
isEven(suma2);
console.log("Para el array3:") 
isEven(suma3);
