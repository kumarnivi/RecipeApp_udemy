import { Ingrediant } from "../shared/ingrediant.model";
export class ShoppingListService {
private    ingrediants: Ingrediant[]  = [
        new Ingrediant('apple',5),
        new Ingrediant('orange',10)
       ];
       getIngredients() {
        return this.ingrediants.slice();
       }
        addIngredient(ingrediant: Ingrediant){
            this.ingrediants.push(ingrediant);
        }
}