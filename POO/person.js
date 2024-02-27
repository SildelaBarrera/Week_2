///Reto 1
//Crea la clase Person de la manera más completa que se te ocurra. Su constructor debe
//tener como mínimo 2 parámetros de entrada.

//Reto 2
//Utilizando la clase Person definida en el punto anterior, haz que se pueda calcular el IMC
//de cualquier persona que se haya creado como un objeto de la clase.

//Reto 3
//Añadir el atributo yearOfBirth a la clase Person e implementar el método edad que tome
//como parámetro el año y calcule la edad de la persona.

//Reto 4
//Añadir un método que se denomine printAll que muestre por consola cada uno de los
//atributos de la clase Person seguido por “-” y el valor del atributo.

//Reto 5
//Añadir el atributo hobbies a la clase Person, que es un array de strings, y crear un método
//denominado printHobbies, que muestre por consola las aficiones de la persona.

//Reto 6
//Guardar la clase Person en un fichero con extensión .js (person.js). 
//Modificar ese fichero para exportar la clase.


class Person 
{
    constructor (nombre, edad, localidad, altura, peso, yearOfBirth, hobbies)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.localidad = localidad;
        this.altura = altura;
        this.peso = peso;
        this.yearOfBirth = yearOfBirth;
        this.hobbies = hobbies;
    }

    calculoIMC()
    {
        console.log(this.peso / (this.altura * this.altura));
    }

    calculoEdad(añoActual)
    {
        console.log(añoActual - this.yearOfBirth);
    }

    printAll()
    {
        console.log(`${"Nombre"} - ${this.nombre} 
        ${"Edad"} - ${this.edad} 
        ${"Localidad"} - ${this.localidad}
        ${"Altura"} - ${this.altura}
        ${"Peso"} - ${this.peso}
        ${"Año Nacimiento"} - ${this.yearOfBirth}`);
    }

    printHobbies()
        {
            for(let i = 0; i < this.hobbies.length; i++)
            {
                console.log(this.hobbies[i]);
            }
        }
}


module.exports= {Person}