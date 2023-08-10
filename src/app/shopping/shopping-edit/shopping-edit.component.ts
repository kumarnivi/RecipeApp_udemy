import { Component, ElementRef, EventEmitter, ViewChild, Output } from '@angular/core';
import { Ingrediant } from 'src/app/shared/ingrediant.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
 @ViewChild('nameInput') nameInputRef!: ElementRef;
 @ViewChild('amountInput') amountInputRef!: ElementRef;
//  @Output() ingrediantAdded = new EventEmitter<Ingrediant>();
//  ** we have to import increediant instead of passing object **//

constructor(private slService:ShoppingListService) {

}

 onAddItem() {
  const ingName = this.nameInputRef.nativeElement.value;
  const ingAmount = this.amountInputRef.nativeElement.value;
 const newIngrediant = new Ingrediant(ingName, ingAmount);
  this.slService.addIngredient(newIngrediant);
 }
}
