import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Salad', 'Tomato, cheese, olive oil and aragula. Cut and mix.',
                'http://maxpixel.freegreatpicture.com/static/photo/640/Dish-Healthy-Fresh-Cuisine-Salad-Plate-Meal-Food-2150548.jpg'),
    new Recipe('Test', 'test description', '')
  
              ];

  constructor() { }

  ngOnInit() {
  }

}
