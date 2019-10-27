import {IMovie} from './movie';

export interface IMovieList {
  page: number;
  results: Array<IMovie>;
  total_results: number;
  total_pages: number;
}
