// Import necessary dependencies
import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../../recipe.model'; // Adjust the path as needed
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
 @Output() recipeSelected = new EventEmitter<void>()
  constructor() {
    this.recipe = new Recipe('name','dics','imgPath');
  }
  ngOnInit() {

  }
  onSelected(){
    this.recipeSelected.emit();
  }
}
