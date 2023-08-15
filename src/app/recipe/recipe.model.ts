import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public name:string;
    public desc:string;
    public imgPath:string;
    public ingrediants:Ingredient[];

    constructor(name:string, desc:string, imgPath:string, ingrediants: Ingredient[]) {
        this.name =name;
        this.desc = desc;
        this.imgPath = imgPath;
        this.ingrediants = ingrediants;
    }
}