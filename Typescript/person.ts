//Reto 1: Clase Person
//Para los retos de hoy trabajaremos, en el repositorio “Week_2”, creado ayer, desde la rama “dia2”. 
//Se creará una nueva carpeta llamada “Typescript” y los ficheros .js se deben incorporar al .gitignore.
//Crear la Clase Person con la siguiente estructura:
//Atributos Públicos: name: string y age: number
//Atributos Privados: address: string
//Constructor para todos los atributos
//Metodos Públicos:
//- printName(). Imprime por consola el nombre
//- yearOfBirth(currentYear: number):number. Calcula y devuelve el año de nacimiento
//- setAddress(address:string). Modifica el atributo address con el valor pasado como parámetro.
//- getAddress():string. Devuelve el valor del atributo address.


export class Person
{
    public name:string;
    public age: number;
    private address: string;

    constructor(name:string, age:number, address:string)
    {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    public printName() { 
        console.log(this.name);
    }
    public yearOfBirth(currentYear: number){
        return (currentYear - this.age);
    }
    public setAddress(Address:string): void{
        this.address = Address;
    }
    public getAddress() {
        return (this.address);
    }
}





