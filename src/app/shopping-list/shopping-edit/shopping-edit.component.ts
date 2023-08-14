import { Component, ElementRef, EventEmitter, ViewChild, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingrediant } from 'src/app/shared/ingrediant.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
//  @ViewChild('nameInput',{ static:false}) nameInputRef!: ElementRef;
//  @ViewChild('amountInput', {static:false}) amountInputRef!: ElementRef;
//  @Output() ingrediantAdded = new EventEmitter<Ingrediant>();
//  ** we have to import increediant instead of passing object **//

constructor(private slService:ShoppingListService) {

}

 onAddItem(form:NgForm) {
  const value = form.value;
  // const ingName = this.nameInputRef.nativeElement.value;
  // const ingAmount = this.amountInputRef.nativeElement.value;
 const newIngrediant = new Ingrediant(value.name, value.amount);
  this.slService.addIngredient(newIngrediant);
 }
}
