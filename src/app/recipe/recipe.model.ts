// import { Ingredient } from "../shared/ingredient.model";

// export class Recipe {
//     public name:string;
//     public desc:string;
//     public imgPath:string;
//     public ingredients:Ingredient[];

//     constructor(name:string, desc:string, imgPath:string, ingredients: Ingredient[]) {
//         this.name =name;
//         this.desc = desc;
//         this.imgPath = imgPath;
//         this.ingredients = ingredients;
//     }
// }

import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public name: string;
    public description: string
    public imagePath: string
    public ingredients: Ingredient[]; // Add this line for the ingredients property

    constructor(name:string, description:string, imagePath:string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients; // Initialize the ingredients property

    }
}