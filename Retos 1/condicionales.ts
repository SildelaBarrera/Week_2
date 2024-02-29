// Retos de Condicionales
// 1. Trabajar en la rama repaso1 .En una carpeta nueva. Ej: retos1. Guarda estos retos en un
// fichero .js Ej: condicionales.ts
// 2. Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal.
// La fecha de nacimiento vendrá indicada por dos números: dia y mes.
// La cabecera de la función tendrá el siguiente aspecto: function zodiac(day, month)


function zodiac(day:number, month:number){

    let zodiacSign: string = "";

    if((( day >= 21 && day <= 31 ) && month == 3)|| (day <= 20 && month == 4)){
        zodiacSign = "Aries"
    }
    else if((( day >= 21 && day <= 30 ) && month == 4)|| (day <= 21 && month == 5)){
        zodiacSign = "Tauro"
    }
    else if((( day >= 21 && day <= 31 ) && month == 5)|| (day <= 20 && month == 6)){
        zodiacSign = "Géminis"
    }
    else if((( day >= 21 && day <= 30 ) && month == 6)|| (day <= 22 && month == 7)){
        zodiacSign = "Cáncer"
    }
    else if((( day >= 23 && day <= 31 ) && month == 7)|| (day <= 23 && month == 8)){
        zodiacSign = "Leo"
    }
    else if((( day >= 24 && day <= 31 ) && month == 8)|| (day <= 22 && month == 9)){
        zodiacSign = "Virgo"
    }
    else if((( day >= 23 && day <= 30 ) && month == 9)|| (day <= 23 && month == 10)){
        zodiacSign = "Libra"
    }
    else if((( day >= 24 && day <= 31 ) && month == 10)|| (day <= 22 && month == 11)){
        zodiacSign = "Escorpio"
    }
    else if((( day >= 23 && day <= 30 ) && month == 11)|| (day <= 21 && month == 12)){
        zodiacSign = "Sagitario"
    }
    else if((( day >= 22 && day <= 31 ) && month == 12)|| (day <= 20 && month == 1)){
        zodiacSign = "Capricornio"
    }
    else if((( day >= 21 && day <= 31 ) && month == 1)|| (day <= 19 && month == 2)){
        zodiacSign = "Acuario"
    }
    else if((( day >= 20 && day <= 2 ) && month == 3)|| (day <= 20 && month == 3)){
        zodiacSign = "Piscis"
    }
    else {
        zodiacSign = "Fecha errónea"
    }
    return(zodiacSign);
}

console.log(zodiac(31,7));

// 3. Realizar un procedimiento que dado el nombre de un país te imprima en que continente
// estás. (Max 5 países por continente).
// La cabecera del procedimiento tendrá el siguiente aspecto: function continent(country)

function continent(country: string){

    let europa: string[] = ["Italia", "Alemania", "Suiza", "Irlanda", "Noruega"];
    let africa: string[] = ["Marruecos", "Kenia", "Tanzania", "Libia", "Egipto"];
    let asia: string[] = ["Japón", "Tailandia", "China", "Mongolia", "Filipinas"];
    let américa: string[] = ["Costa Rica", "Canadá", "Ecuador", "Chile", "EEUU"];
    let oceanía: string[] = ["Australia", "Nueva Zelanda", "Palaos", "Fiyi", "Samoa"];

    for(let i = 0; i < 5 ; i++){
        if (country == europa[i]){
        console.log("Europa");
        }
        if (country == africa[i]){
            console.log("África");
        }
        if (country == asia[i]){
            console.log("Asia");
        }
        if (country == américa[i]){
            console.log("América");
        }
        if (country == oceanía[i]){
            console.log("Oceanía");
        }

    }
}

continent("Tanzania");



// 4. Realizar una función que te imprima por consola el siguiente mensaje:
// - “El numero es par”, si el numero introducido como parámetro de entrada es par
// - “El numero es impar”, si el numero introducido como parámetro de entrada es impar
// 5. La cabecera de la función tendrá el siguiente aspecto: function isEven(number)
// 6. Subir los cambios a GitHub.

let arrayNum: number[] = [5, 24, 86, 23, 65, 1, 11, 78, 192]

function isEven(number: number){

    if(number % 2 == 0){
    console.log("El número es par")
    }
    if(number % 2 != 0){
        console.log("El número es impar")
        }  
}

isEven(1563);