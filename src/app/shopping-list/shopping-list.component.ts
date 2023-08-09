import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 ingrediants: Ingrediant[]  = [
  new Ingrediant('apple',5),
  new Ingrediant('orange',10)
 ];

  
ngOnInit() {

}
onIngrediantAdded( ingrediant: Ingrediant){
   this.ingrediants.push(ingrediant)
 
}

}
