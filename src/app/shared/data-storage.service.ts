import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipe/recipe.service';
import { Recipe } from '../recipe/recipe.model';
import { exhaustMap, map, take, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' }) //** optional */
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipe() {
    const recipes = this.recipeService.getRecipes();
    return this.http
      .put(
        'https://recipe-6a877-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

//   fetchRecipes() {
//   return  this.authService.user.pipe(
//       take(1),
//       exhaustMap((user) => {
//         return this.http.get<Recipe[]>(
//           'https://recipe-6a877-default-rtdb.firebaseio.com/recipes.json' ,
//           {
//             params:new HttpParams().set('auth', user.token)
//           }
//         );
//       }),
//       map((recipes) => {
//         return recipes.map((recipe) => {
//           return {
//             ...recipe,
//             ingredients: recipe.ingredients ? recipe.ingredients : [],
//           };
//         });
//       }),
//       tap((recipes) => {
//         this.recipeService.setRecipes(recipes);
//       })
//     );
//   }

fetchRecipes() {
   return this.authService.user.pipe(
     take(1),
     exhaustMap((user) => {
       const params = user && user.token ? new HttpParams().set('auth', user.token) : new HttpParams();
       
       return this.http.get<Recipe[]>(
         'https://recipe-6a877-default-rtdb.firebaseio.com/recipes.json',
         { params: params }
       );
     }),
     map((recipes) => {
       return recipes.map((recipe) => {
         return {
           ...recipe,
           ingredients: recipe.ingredients ? recipe.ingredients : [],
         };
       });
     }),
     tap((recipes) => {
       this.recipeService.setRecipes(recipes);
     })
   );
 }
 
}
