import { Injectable } from '@angular/core';
import {RequestUrls} from '../../models/request-urls';
import {Observable} from 'rxjs';
import {ApiService} from '../api/api.service';
import {IMovieList} from '../../models/movieList';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private requestUrls: RequestUrls, private apiService: ApiService) { }

  getMovies(page: number, query: string, adult: boolean = true): Observable<IMovieList> {
    return this.apiService.get(this.requestUrls.movieList, {page, query, include_adult: adult});
  }
}
