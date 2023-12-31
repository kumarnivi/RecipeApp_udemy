// import { EventEmitter, Injectable } from "@angular/core";
// import { Recipe } from "./recipe.model";
// import { Ingredient } from "../shared/ingredient.model";
// import { ShoppingListService } from "../shopping-list/shopping-list.service";

// @Injectable()
// export class RecipeService {
//   recipeSelected = new EventEmitter<Recipe>();

//   private  recipes:Recipe[] = [
//         new Recipe('Burgger one', 
//         'This is simply and teast',
//         'https://www.freepnglogos.com/uploads/burger-png/burger-png-tasty-made-3.png',
//         [
//           new Ingredient('Meat', 1),
//           new Ingredient('bun', 2)
//         ]),
//         new Recipe('Burgger Two', 
//         'This is simply and teast',
//         'https://www.freepnglogos.com/uploads/burger-png/burger-png-tasty-made-3.png',
//         [
//           new Ingredient('Meat', 1),
//           new Ingredient('bun', 2)
//         ])
    
//       ];
//       constructor(private slService:ShoppingListService) {}

//       getRecipes(){
//         return this.recipes.slice();
//       }

//     getRecipe(index:number) {
//       return this.recipes[index]
//     }

//       addIngrediantsToShoppingList(ingredients: Ingredient[]) {
//         this.slService.addIngredients(ingredients)
//       }

//       addRecipe(recipe: Recipe) {
//        this.recipes.push(recipe)
//       }
     
//       // ** for Update Recipe **//
//       updateRecipe(index:number, newRecipe: Recipe) {
//         this.recipes[index] = newRecipe
//       }
      
// }


import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
recipesChanged = new Subject<Recipe[]>();

  //? Array to store predefined recipes
  // private recipes: Recipe[] = [
  //   //? Recipe 1: Big Hamburger
  //   new Recipe(
  //     'Big Hamburger',
  //     'Indulge in pure satisfaction with our big hamburger - a culinary masterpiece that boasts succulent, flame-grilled beef enveloped in a fluffy, toasted brioche bun.',
  //     'https://img.freepik.com/free-photo/hamburger-isolated-white-background-fresh-burger-fastfood-with-beef-cheese_90220-1329.jpg?t=st=1692149135~exp=1692152735~hmac=7caa51744cc664cddc46e8796829031f304ee2247aeebb094be18f4972d9d384&w=740',
  //     [new Ingredient('Buns', 2), new Ingredient('French chees', 3)]
  //   ),
  //   //? Recipe 2: Pepperoni Pizza
  //   new Recipe(
  //     'Bun',
  //     'Savor the timeless classic of our pepperoni pizza, where a golden, thin crust cradles a tantalizing blend of melted mozzarella and zesty tomato sauce.',
  //     'https://www.pngall.com/wp-content/uploads/12/Bun-PNG-Images.png',
  //     [new Ingredient('Pepperoni', 20), new Ingredient('Meat', 1)]
  //   ),
  //   //? Recipe 3: Hot Dog

  //   new Recipe(
  //     'Hot Dog',
  //     'Hot dogs are prepared commercially by mixing the ingredients (meats, spices, binders and fillers) in vats where rapidly moving blades grind and mix the ingredients',
  //     'https://purepng.com/public/uploads/large/purepng.com-hot-dogfood-salad-hotdog-sausage-sandwich-ketchup-9415246184411sj9v.png',
  //     [new Ingredient('Sausages', 1), new Ingredient('Sliced Bun', 1)]
  //   ),
    

   
  // ];

  private recipes : Recipe [] = []

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes :Recipe[]) {
     this.recipes = recipes;
     this.recipesChanged.next(this.recipes.slice())  // ** just put a recipes
  }
  //? Returns a copy of the recipes array
  getRecipes() {
    return this.recipes.slice();
  }

  //? Returns the recipe at the specified index
  getRecipe(index: number) {
    return this.recipes[index];
  }

      addRecipe(recipe: Recipe) {
       this.recipes.push(recipe);
       this.recipesChanged.next(this.recipes.slice()) 
      }

           // ** for Update Recipe **//
      updateRecipe(index:number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice()) 
      }
       

  //** Adds the provided ingredients to the shopping list
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
//  ** delete a single recipe 
  deleteRecipe(index:number) {
    this.recipes.splice(index, 1) //** here delete a one value */
    this.recipesChanged.next(this.recipes.slice())
  }
}
