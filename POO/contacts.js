//Reto 7
//Crear una clase que se llame Contacts que tenga un atributo que sea un array de objetos
//de la clase Person. No olvides seguir trabajando desde tu rama ”dia1”.
//El constructor de la clase Contacts no debe tener parámetros de entrada pero debe inicializar el array.
//Crear un método llamado printPersons que imprima cada uno de los atributos de cada objeto Person.

let {Person} = require("./person");

class Contacts
{
    constructor()
    {
        this.objetos = []
    }
        printPersons()
        {
            return (this.objetos)
        }   
}

module.exports= {Contacts}
