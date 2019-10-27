import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpRequest} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpErrorInterceptor} from './interceptors/http-error.interceptor';
import {HttpRequestInterceptor} from './interceptors/http-request.interceptor';
import { MovieSearchComponent } from './components/renderers/movie-search/movie-search.component';
import {RequestUrls} from './models/request-urls';
import { PaginationComponent } from './components/parts/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    RequestUrls
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
