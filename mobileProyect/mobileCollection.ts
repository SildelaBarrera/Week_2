// 1. Trabajar en la rama repaso2 dentro de la carpeta creada en el reto anterior crear el fichero
// mobileCollection.ts
// 2. Dicho fichero debe contener la clase MobileCollection con los siguientes atributos privados:
// • mobiles: Mobile[]
// • totalPrice: number
// 3. El constructor debe tener como parámetro de entrada el array de objetos de la clase Mobile.
// 4. Crear los métodos setters y getters para todos los atributos de la clase.

import {Mobile} from "./mobile"
import { myMobiles } from "./mobileTest";

export class MobileCollection
{

    private mobiles: Mobile[];
    private totalPrice: number;


    constructor(mobiles, totalPriceCalculation){
        this.mobiles = mobiles;
        this.totalPrice = totalPriceCalculation;
    }

public setMobiles(mobiles: Mobile[]){
    this.mobiles = mobiles;
}
public getMobiles(){
    return(this.mobiles)
}
public setTotalPrice(totalPrice: number){
    this.totalPrice = totalPrice;
}
public getTotalPrice(){
    return(this.totalPriceCalculation())
}

public printCollection(){
    let phrase: string = "";
    for (let i=0; i < this.mobiles.length; i++){ 

        phrase += ("The characteristics of the mobile " + this.mobiles[i].getName()
        + " are: \nName: " + this.mobiles[i].getName() + "\nTrademark: " + this.mobiles[i].getTrademark() + 
        "\nModel: " + this.mobiles[i].getModel() + "\nColor: " + this.mobiles[i].getColor() + "\nPrice: " 
        + this.mobiles[i].getPrice() + "\n")
    }
    console.log("This are all my mobiles: \n" + phrase);
    

}
private totalPriceCalculation(){
    let totalNum: number = 0;
    for(let i=0; i < this.mobiles.length; i++){
       totalNum += this.mobiles[i].getPrice();
    }
    return totalNum;
}
}



