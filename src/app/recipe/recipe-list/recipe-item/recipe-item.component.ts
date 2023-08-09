// Import necessary dependencies
import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../../recipe.model'; // Adjust the path as needed

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
 @Output() recipeSelected = new EventEmitter();
  constructor() {
  
  }
  ngOnInit() {

  }
  onSelected(){
    this.recipeSelected.emit();
  }
}
