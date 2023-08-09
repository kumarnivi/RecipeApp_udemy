import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  // ? Add Provider For Recipe Service //
  providers: [RecipeService]
})
export class RecipeComponent {
  selectedRecipe!: Recipe;

 constructor () {

 }
 ngOnInit() {
  
 }
}
