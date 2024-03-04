//Reto 3: Clase Contacts
//1. Crear un fichero denominado contacts.ts.
//2. Importar la clase Person.
//3. Crear la clase contacts con la siguiente estructura:
//• Atributo Público:
//- people: array de objetos de la clase Person.
//• Constructor sin parámetros que inicialice el array people.
//• Métodos Públicos:
//- printCalendar(). Imprime por consola los datos de todas las personas de la agenda.
//4. Probar la clase contacts en un fichero denominado contactsTest.ts

import { Person } from "./person"

export class Contacts
{
   public people: Person[];

    constructor()
    {
        this.people = [];
    }
        printCalendar()
        {
            return (this.people)
        }   
}


