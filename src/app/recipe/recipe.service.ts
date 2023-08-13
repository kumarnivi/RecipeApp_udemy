import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingrediant } from "../shared/ingrediant.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private  recipes:Recipe[] = [
        new Recipe('Burgger one', 
        'This is simply and teast',
        'https://www.freepnglogos.com/uploads/burger-png/burger-png-tasty-made-3.png',
        [
          new Ingrediant('Meat', 1),
          new Ingrediant('bun', 2)
        ]),
        new Recipe('Burgger Two', 
        'This is simply and teast',
        'https://www.freepnglogos.com/uploads/burger-png/burger-png-tasty-made-3.png',
        [
          new Ingrediant('Meat', 1),
          new Ingrediant('bun', 2)
        ])
    
      ];
      constructor(private slService:ShoppingListService) {}

      getRecipes(){
        return this.recipes.slice();
      }

    getRecipe(index:number) {
      return this.recipes[index]
    }

      addIngrediantsToShoppingList(ingrediants: Ingrediant[]) {
        this.slService.addIngredients(ingrediants)
      }
     
}


