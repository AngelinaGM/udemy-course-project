import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class DataStorageService {
    constructor(private http: Http,
                private recipeService: RecipeService,
                private authService: AuthService) {}

    saveData() {
        const token = this.authService.getToken();
        return this.http.put('https://ng-recipe-book-340eb.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }

    fetchData() {
        const token = this.authService.getToken();

        return this.http.get('https://ng-recipe-book-340eb.firebaseio.com/recipes.json?auth=' + token)
            .map(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            );
    }
}