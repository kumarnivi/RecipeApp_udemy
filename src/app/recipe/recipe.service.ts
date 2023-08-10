import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingrediant } from "../shared/ingrediant.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private  recipes:Recipe[] = [
        new Recipe('A Test Recipe', 
        'This is simply and teast',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
          new Ingrediant('Meat', 1),
          new Ingrediant('bun', 2)
        ]
        )
    
      ];
      getRecipes(){
        return this.recipes.slice();
      }
}