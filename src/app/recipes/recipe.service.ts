import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class RecipeService {
recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Salad',
            'Tomato, cheese, olive oil and aragula. Cut and mix.',
            'http://maxpixel.freegreatpicture.com/static/photo/640/Dish-Healthy-Fresh-Cuisine-Salad-Plate-Meal-Food-2150548.jpg',
            [
                new Ingredient('Tomato', 3),
                new Ingredient('Chese', 2),
                new Ingredient('Aragula', 1)
            ]),
        new Recipe(
            'Steak',
            'Beef, solt, olive oil, pepper',
            'http://amazingwoman.ru/wp-content/uploads/2014/06/govjazhii-steik3.jpg',
            [
                new Ingredient('Beef', 1),
                new Ingredient('Solt', 1),
                new Ingredient('Pepper', 1),
                new Ingredient('Olive oil', 1)
            ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToSl(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice()); 
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
}