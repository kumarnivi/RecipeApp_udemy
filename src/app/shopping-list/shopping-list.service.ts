// import { EventEmitter } from "@angular/core";
import { Subject } from 'rxjs';
import { Ingrediant } from '../shared/ingrediant.model';
export class ShoppingListService {
  // ingrediantChanged = new EventEmitter<Ingrediant[]>()

  // ** for edit shopping list **
  startedEditting = new Subject<number>();

  // **using Subject
  ingredientChanged = new Subject<Ingrediant[]>();
  private ingrediants: Ingrediant[] = [
    new Ingrediant('apple', 5),
    new Ingrediant('orange', 10),
  ];

  getIngredients() {
    return this.ingrediants.slice();
  }

// ** for edit the shoppinListItems (this is maping) **
  getIngredient(index: number){
   return this.ingrediants[index]
}

  addIngredient(ingrediant: Ingrediant) {
    this.ingrediants.push(ingrediant);
    console.log(this.ingrediants);
    this.ingredientChanged.next(this.ingrediants.slice());
  }
  addIngredients(ingrediants: Ingrediant[]) {
    // for(let ingrediant of ingrediants) {
    //  this.addIngredient(ingrediant)
    // }
    this.ingrediants.push(...ingrediants);
    this.ingredientChanged.next(this.ingrediants.slice());
  }

  // ** Updated ingredient **
  updateIngredient(index: number, newIngredient: Ingrediant) {
     this.ingrediants[index] = newIngredient
     this.ingredientChanged.next(this.ingrediants.slice())
  }

  // ** delete Items
  deleteIngredient(index: number){
    this.ingrediants.splice(index, 1)
    this.ingredientChanged.next(this.ingrediants.slice())
  }
}
