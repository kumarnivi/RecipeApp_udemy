// import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingrediant } from "../shared/ingrediant.model";
export class ShoppingListService {
// ingrediantChanged = new EventEmitter<Ingrediant[]>()

// ** for edit shopping list **
startedEditting = new Subject<number>();

// **using Subject
ingredientChanged = new Subject<Ingrediant[]>()
private  ingrediants: Ingrediant[]  = [
        new Ingrediant('apple',5),
        new Ingrediant('orange',10)
       ];
       getIngredients() {
        return this.ingrediants.slice();
       }
        addIngredient(ingrediant: Ingrediant){
            this.ingrediants.push(ingrediant);
            console.log(this.ingrediants)
             this.ingredientChanged.next(this.ingrediants.slice())
        }
        addIngredients(ingrediants: Ingrediant[]){
            // for(let ingrediant of ingrediants) {
            //  this.addIngredient(ingrediant)
            // }
            this.ingrediants.push(...ingrediants);
            this.ingredientChanged.next(this.ingrediants.slice())
               }
}