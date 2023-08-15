// // import { EventEmitter } from "@angular/core";
// import { Subject } from 'rxjs';
// import { Ingredient } from '../shared/ingredient.model';
// export class ShoppingListService {
//   // ingrediantChanged = new EventEmitter<Ingrediant[]>()

//   // ** for edit shopping list **
//   startedEditing = new Subject<number>();

//   // **using Subject
//   ingredientsChanged = new Subject<Ingredient[]>();
//   private ingredients: Ingredient[] = [
//     new Ingredient('apple', 5),
//     new Ingredient('orange', 10),
//   ];

//   getIngredients() {
//     return this.ingredients.slice();
//   }

// // ** for edit the shoppinListItems (this is maping) **
//   getIngredient(index: number){
//    return this.ingredients[index]
// }

//   addIngredient(ingredient: Ingredient) {
//     this.ingredients.push(ingredient);
//     console.log(this.ingredients);
//     this.ingredientsChanged.next(this.ingredients.slice());
//   }
//   addIngredients(ingredients: Ingredient[]) {
//     // for(let ingrediant of ingrediants) {
//     //  this.addIngredient(ingrediant)
//     // }
//     this.ingredients.push(...ingredients);
//     this.ingredientsChanged.next(this.ingredients.slice());
//   }

//   // ** Updated ingredient **
//      updateIngredient(index: number, newIngredient: Ingredient) {
//      this.ingredients[index] = newIngredient
//      this.ingredientsChanged.next(this.ingredients.slice())
//   }

//   // ** delete Items
//   deleteIngredient(index: number){
//     this.ingredients.splice(index, 1)
//     this.ingredientsChanged.next(this.ingredients.slice())
//   }
// }

import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  //? Using a Subject to notify ingredient changes to subscribers
  ingredientsChanged = new Subject<Ingredient[]>();

  //? Subject to notify subscribers about editing started
  startedEditing = new Subject<number>();

  //? Array to store the list of ingredients
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10),
  ];

  //? Returns a copy of the ingredients array
  getIngredients() {
    return this.ingredients.slice();
  }

  //? Returns the ingredient at a specific index
  getIngredient(index: number) {
    return this.ingredients[index];
  }

  //? Adds a single ingredient to the array and notifies subscribers
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient); //? Add the new ingredient to the array
    //console.log(this.ingredients); //? Log the updated ingredient list
    this.ingredientsChanged.next(this.ingredients.slice()); //? Notify subscribers about the change
  }

  //? Adds multiple ingredients to the array and notifies subscribers
  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    //? Using the spread operator (...) to add multiple elements to the array
    this.ingredients.push(...ingredients); //? Add the new ingredients to the array
    console.log(this.ingredients);

    this.ingredientsChanged.next(this.ingredients.slice()); //? Notify subscribers about the change
  }
  //? Method to update an ingredient in the list
  updateIngredient(index: number, newIngredient: Ingredient) {
    //? Replace the ingredient at the specified index with the new ingredient
    this.ingredients[index] = newIngredient;
    //? Notify subscribers about the updated ingredient list
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  //? Method to delete an ingredient in the list
  deleteIngredient(index: number) {
    //? Use the 'splice' method to remove one element at the specified 'index'
    this.ingredients.splice(index, 1);
    //? Notify subscribers about the updated ingredient list
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}

