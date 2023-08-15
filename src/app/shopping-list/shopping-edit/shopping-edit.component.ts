import {
  Component,
  ElementRef,
  EventEmitter,
  ViewChild,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  //  @ViewChild('nameInput',{ static:false}) nameInputRef!: ElementRef;
  //  @ViewChild('amountInput', {static:false}) amountInputRef!: ElementRef;
  //  @Output() ingrediantAdded = new EventEmitter<Ingrediant>();
  //  ** we have to import increediant instead of passing object **//

  @ViewChild('f', {static:false}) slForm!: NgForm;

  //  ** we have to store the data using by subscription
  subscription!: Subscription;
  editMode = false;
  editedItemIndex!: number;
  editedItem!: Ingredient

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {

    // ** for edit shopping list items
    this.subscription = this.slService.startedEditing
    .subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
        name:this.editedItem.name,
        amount: this.editedItem.amount
        })
      }
    );
  }
// ** for edit mode **

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngrediant = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex, newIngrediant)
    } else {
      this.slService.addIngredient(newIngrediant);
    }
    this.editMode= false
   form.reset()
  }



// ** for clear moode **
onClear() {
  this.slForm.reset();
  this.editMode = false;
} 


  // ** for Delete mode **
  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear()
  }

  // ** for clean the data **
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  

}
