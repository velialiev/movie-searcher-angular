import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieSearchComponent} from './components/renderers/movie-search/movie-search.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'movie/search'},
  {path: 'movie/search', component: MovieSearchComponent},
  {path: '**', redirectTo: 'movie/search'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
