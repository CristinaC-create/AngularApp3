import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipeViewComponent } from './pages/recipe-view/recipe-view.component';
import { IngredientsViewComponent } from './pages/ingredients-view/ingredients-view.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', component: RecipeViewComponent },
  { path: 'ingredients', component: IngredientsViewComponent }
];