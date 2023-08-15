import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'; // Correct the import path
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients!: Ingredient[]; // Use 'ingredients' instead of 'ingrediants'
  private subscription!: Subscription; // Correct the initialization

  constructor(private slService: ShoppingListService) {}

 

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    // Use 'ingredientChanged' instead of 'ingrediantChanged'
    this.subscription = this.slService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

// ** for editting items **
   
  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
