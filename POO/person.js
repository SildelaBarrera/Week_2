//Reto 6
//Guardar la clase Person en un fichero con extensión .js (person.js).
//Modificar ese fichero para exportar la clase.
//Importar la clase en otro fichero denominado personTest.js.
//Crear un objeto de la clase Persona y probar todos sus atributos y métodos.
//Sube todos los cambios a tu rama “dia1”.


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
        for (let hobbie of this.hobbies){

            console.log(hobbie);
        }
    }
}

module.exports= {Person}