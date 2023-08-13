import { EventEmitter } from "@angular/core";
import { Ingrediant } from "../shared/ingrediant.model";
export class ShoppingListService {
    ingrediantChanged = new EventEmitter<Ingrediant[]>()
private  ingrediants: Ingrediant[]  = [
        new Ingrediant('apple',5),
        new Ingrediant('orange',10)
       ];
       getIngredients() {
        return this.ingrediants.slice();
       }
        addIngredient(ingrediant: Ingrediant){
            this.ingrediants.push(ingrediant);
            this.ingrediantChanged.emit(this.ingrediants.slice())
        }
        addIngredients(ingrediants: Ingrediant[]){
            // for(let ingrediant of ingrediants) {
            //  this.addIngredient(ingrediant)
            // }
            this.ingrediants.push(...ingrediants);
            this.ingrediantChanged.emit(this.ingrediants.slice())
               }
}