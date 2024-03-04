// Trabajar en la rama repaso2, crear una nueva carpeta denominada mobileProject y
// crear el fichero mobile.ts. Dicho fichero debe contener la clase Mobile con los siguientes
// atributos privados:


export class Mobile
{
    private name: string;
    private trademark: string;
    private model: string;
    private color: string;
    private price: number;

    constructor(name, trademark, model, color, price){

        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    public setName(name: string){
        this.name = name;
    }
    public getName(){
        return(this.name);
    }
    public setTrademark(trademark: string){
        this.trademark = trademark;
    }
    public getTrademark(){
        return(this.trademark);
    }
    public setModel(model: string){
        this.model = model;
    }
    public getModel(){
        return(this.model);
    }
    public setColor(color: string){
        this.color = color;
    }
    public getColor(){
        return(this.color);
    }
    public setPrice(price: number){
        this.price = price;
    }
    public getPrice(){
        return(this.price);
    }
    public printMobile(){
        console.log("The characteristics of the mobile are: \nName: " + this.name + 
        "\nTrademark: " + this.trademark + "\nModel: " + this.model + "\nColor: " + this.color +
        "\nPrice: " + this.price)
                
    }
}