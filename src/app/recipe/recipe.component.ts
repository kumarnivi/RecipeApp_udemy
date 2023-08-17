import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  // ? Add Provider For Recipe Service //

})
export class RecipeComponent implements OnInit {
  // selectedRecipe!: Recipe;

//  constructor (private recipeService: RecipeService) {

//  }
//  ngOnInit():void {
//   this.recipeService.recipeSelected
//   .subscribe(
//     (recipe: Recipe) => {
//       this.selectedRecipe = recipe;
//     }
//   )
//  }

ngOnInit() {

}
}
