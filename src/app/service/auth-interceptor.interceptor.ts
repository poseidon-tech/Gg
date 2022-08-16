import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService, private router:Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    var token=this.loginService.getToken();
      if(localStorage.getItem("token")!=null)
      {
      
    req=  req.clone({setHeaders:{'Authorization':'Bearer '+token}})
      }
      return next.handle(req).pipe(catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          window.location.href = "/login"; 
        }return throwError(error);}));
   
  
  

  

}
}
