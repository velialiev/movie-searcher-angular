import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieService} from '../../../services/movie/movie.service';
import {Subject, timer} from 'rxjs';
import {debounce, debounceTime, delay, takeUntil} from 'rxjs/operators';
import {IMovie} from '../../../models/movie';
import {ApiService} from '../../../services/api/api.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit, OnDestroy {

  public movies: Array<IMovie>;
  public currentPage = 1;
  public numberOfPages = 1;

  private destroy$: Subject<void> = new Subject<void>();
  public loading: boolean;
  private searchingTimeout: any;

  constructor(private movieService: MovieService, public apiService: ApiService) { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
  getMovies(query: string, page: number): void {
    if (!query) {
      this.movies = [];
      this.currentPage = 1;
      this.numberOfPages = 1;
      return;
    }
    this.loading = true;
    clearTimeout(this.searchingTimeout);
    this.searchingTimeout = setTimeout(() => {
      this.movieService.getMovies(page, query)
        .pipe(takeUntil(this.destroy$))
        .subscribe(res => {
          this.movies = res.results;
          this.currentPage = res.page;
          this.numberOfPages = res.total_pages;
          this.loading = false;
        });
    }, 500);
  }
}
