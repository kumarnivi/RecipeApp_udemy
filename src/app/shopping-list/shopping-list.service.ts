// import { EventEmitter } from "@angular/core";
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
export class ShoppingListService {
  // ingrediantChanged = new EventEmitter<Ingrediant[]>()

  // ** for edit shopping list **
  startedEditing = new Subject<number>();

  // **using Subject
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('orange', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

// ** for edit the shoppinListItems (this is maping) **
  getIngredient(index: number){
   return this.ingredients[index]
}

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    console.log(this.ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    // for(let ingrediant of ingrediants) {
    //  this.addIngredient(ingrediant)
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  // ** Updated ingredient **
     updateIngredient(index: number, newIngredient: Ingredient) {
     this.ingredients[index] = newIngredient
     this.ingredientsChanged.next(this.ingredients.slice())
  }

  // ** delete Items
  deleteIngredient(index: number){
    this.ingredients.splice(index, 1)
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}