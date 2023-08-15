import { Component,OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute,Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

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

  // if(recipe['ingrediants']) {
  //   for ( let ingrediant of recipe.ingrediants) {
  //     recipeIngredients.push(
  //       new FormGroup({
  //         'name': new FormControl(ingrediant.name),
  //         'amount': new FormControl(ingrediant.amount)
  //       })
  //     )
  //   }
  // }
  
}

 this.recipeForm = new FormGroup({
  'name': new FormControl(recipeName),
  'imgPath': new FormControl(recipeImgPath),
  'desc' : new FormControl(recipeDesc),
  'ingrediants' : recipeIngredients
 })
}


get controls() { // a getter!
  return (<FormArray>this.recipeForm.get('ingredients')).controls;
}

}
