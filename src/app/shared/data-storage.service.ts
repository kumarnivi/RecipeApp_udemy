import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { RecipeService } from "../recipe/recipe.service"

@Injectable({providedIn: 'root'}) //** optional */
export class DataStorageService  {
 constructor (private http : HttpClient, private recipeService: RecipeService) {}

 storeRecipe() {
  const recipes = this.recipeService.getRecipes()
 return this.http.put('https://recipe-6a877-default-rtdb.firebaseio.com/recipes.json', recipes)
 .subscribe(response => {
    console.log(response)
 })
 }
}