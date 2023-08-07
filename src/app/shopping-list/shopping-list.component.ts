import { Component, OnInit } from '@angular/core';
import { Incrediant } from '../shared/incrediant.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 incredients: Incrediant[]  = [
  new Incrediant('apple',5),
  new Incrediant('orange',10)
 ];

  
ngOnInit() {

}
}
