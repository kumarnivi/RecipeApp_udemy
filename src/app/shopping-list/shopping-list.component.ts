import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model'; // Correct the import path
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingrediants!: Ingrediant[]; // Use 'ingredients' instead of 'ingrediants'

  private igChangeSub!: Subscription; // Correct the initialization

  constructor(private slService: ShoppingListService) {} 

  ngOnInit() {
    this.ingrediants = this.slService.getIngredients();
    // Use 'ingredientChanged' instead of 'ingrediantChanged'
    this.igChangeSub = this.slService.ingredientChanged
      .subscribe(
        (ingrediants: Ingrediant[]) => {
          this.ingrediants = ingrediants;
        }
      );
  }

  ngOnDestroy() {
    this.igChangeSub.unsubscribe();
  }
}
