import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes!: Recipe[];
  subscription! : Subscription

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.recipeService.recipesChanged.subscribe( //** subscribe the recipe */
      (recipes: Recipe[]) => {
        this.recipes = recipes; //** after get the value */
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(){
   this.router.navigate(['new'], {relativeTo: this.route})
  }

  ngOnDestroy(): void { //** for unsubscribe the recipes */
    this.subscription.unsubscribe()
  }
}
// ok

