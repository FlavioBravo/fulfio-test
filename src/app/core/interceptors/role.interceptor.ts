import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RoleInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const role = localStorage.getItem('role') || '';
    const newHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': role,
    });
    if (request.method === 'GET') {
      let clone = request.clone({ headers: newHeaders });
      return next.handle(clone);
    }
    //clone request and change header
    let clone = request.clone({ headers: newHeaders });
    return next.handle(clone);
  }
}
