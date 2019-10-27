import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest} from '@angular/common/http';
import { Observable} from 'rxjs';

export class HttpRequestInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // request = request.clone({
    //   setHeaders: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    //   }
    // });
    return next.handle(request);
  }
}
