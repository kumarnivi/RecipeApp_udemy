// Import necessary dependencies
import { Component, Input, OnInit,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model'; // Adjust the path as needed
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
//  **here add A property Binding**//
 @Input() index!: number;
  // constructor(private recipeService: RecipeService ) {
  
  // }
  ngOnInit() {

  }
  // onSelected(){
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
