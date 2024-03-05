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


    constructor(mobiles){
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
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
   
    console.log("This are all my mobiles: \n");

    let phrase: string = "";
    for (let i=0; i < this.mobiles.length; i++){ 

        phrase += (this.mobiles[i].printMobile())
    }
    console.log("\nPrice overall: " + this.totalPrice);
}

private totalPriceCalculation(){
    
    let totalNum: number = 0;
    for(let i=0; i < this.mobiles.length; i++){
       totalNum += this.mobiles[i].getPrice();
    }
    return totalNum;
    }

}



