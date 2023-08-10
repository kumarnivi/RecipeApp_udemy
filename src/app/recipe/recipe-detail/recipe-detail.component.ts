import { Component, Input, OnInit } from '@angular/core';
 import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
@Input()  recipe! : Recipe;
// ** inject the recipe service here **//
  constructor ( private recipeService: RecipeService){
    
  }
  ngOnInit() {

  }
  onAddToShoppingList(){
  this.recipeService.addIngrediantsToShoppingList(this.recipe.ingrediants)
  }
}
