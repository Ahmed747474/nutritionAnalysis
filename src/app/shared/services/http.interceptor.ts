import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      params: request.params.set('app_id', environment.appID),
    });
    request = request.clone({
      params: request.params.set('app_key', environment.appKey),
    });
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      })
    );
  }
}

export const HttpConfigInterceptors = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpConfigInterceptor,
  multi: true,
};
