import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';

import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token: string | null = this.authService.getTokenFromLocal();
    if (token) {
      request = request.clone({
        setHeaders: {
          'x-token': `${token}`,
        },
      });
      console.log('Request', request);
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 || error.status === 403) {
          this.authService.logout();
          this.router.navigate(['/login']);
        }
        return throwError((error: HttpErrorResponse) => {
          console.log('REQUESTTTT:', request);
          console.log(error);
        });
      }),
      finalize(() => {
        console.log('');
      })
    );
  }
}
