import { Ingrediant } from "../shared/ingrediant.model";

export class Recipe {
    public name:string;
    public desc:string;
    public imgPath:string;
    public ingrediants:Ingrediant[];

    constructor(name:string, desc:string, imgPath:string, ingrediants: Ingrediant[]) {
        this.name =name;
        this.desc = desc;
        this.imgPath = imgPath;
        this.ingrediants = ingrediants;
    }
}