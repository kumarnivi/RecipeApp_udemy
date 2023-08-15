import { Component,OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id!: number;
 editMode = false;

//  ** add FormGroupes From Angular FormGroup **
recipeForm!:FormGroup

constructor (private route:ActivatedRoute, private recipeServide: RecipeService) {}


ngOnInit():void {
  this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        //  ** route params changed **
         this.initForm(); 
      }
    );
}

// ** Submit the reactive Form Function ** 
onSubmit(){
  console.log(this.recipeForm)
  // const newRecipe = new Recipe
  // if(this.editMode) {
  //   this.recipeServide.updateRecipe(this.id)
  // }
}

onAddIngredient() {
  (<FormArray>this.recipeForm.get('ingredients')).push(
    new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null,
         [Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)])
    })
  )
}

// ** create reactive form for create new recipe **

private initForm() {
let recipeName = '';
let recipeImgPath =  '';
let recipeDesc = '';
let recipeIngredients = new FormArray([]);



if (this.editMode) {
  const recipe = this.recipeServide.getRecipe(this.id)
  recipeName = recipe.name;
  recipeImgPath = recipe.imgPath;
  recipeDesc =recipe.desc;

//   if (recipe.ingredients) {
//     for (let ingredient of recipe.ingredients) {
//       (this.recipeForm.controls['ingredients'] as FormArray).push(
//         new FormGroup({
//           'name': new FormControl(ingredient.name),
//           'amount': new FormControl(ingredient.amount)
//         })
//       );
//     }
//   }
  
 }

 this.recipeForm = new FormGroup({
  'name': new FormControl(recipeName, Validators.required),
  'imgPath': new FormControl(recipeImgPath, Validators.required),
  'desc' : new FormControl(recipeDesc, Validators.required),
  'ingrediants' : recipeIngredients
 })
}


get controls() { // a getter!
   return (<FormArray>this.recipeForm.get('ingredients')).controls;
}

}
