import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorsComponent } from './actors/actors.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesGenresComponent } from './movies-genres/movies-genres.component';
const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'genres',
    component: MoviesGenresComponent,
  },
  {
    path: 'actors',
    component: ActorsComponent,
  },
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: MoviesComponent,
  },
  // kada putanja ne postoji
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
