import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiKey = '0adbb34bf81e230a73e19aaaeee72637';
  apiUrl = 'https://api.themoviedb.org/3/';
  imgUrl = 'https://image.tmdb.org/t/p/w500';

  constructor(private http: HttpClient) { }

  public get(url: string, params?: any): Observable<any> {
    url = `${this.apiUrl}${url}?api_key=${this.apiKey}`;
    if (params) {
      url = this.appendParams(url, params);
    }
    return this.http.get(url);
  }
  public post(url: string, body?: any) {
    return this.http.post(url, body);
  }

  private appendParams(url: string, params?: {[key: string]: string}): string {
    if (params) {
      // tslint:disable-next-line:forin
      for (const key in params) {
        url += `&${key}=${params[key]}`;
      }
    }
    return url;
  }
}
