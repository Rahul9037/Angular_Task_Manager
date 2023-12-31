import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JWTInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentUser = { token: "" }
    if(sessionStorage['currentUserDetails'] && sessionStorage['currentUserDetails'] !== null){
      currentUser = JSON.parse(sessionStorage['currentUserDetails']);
    }

    req = req.clone({
      setHeaders:{
        Authorization :  "Bearer " + currentUser.token
      }
    })

    return next.handle(req);
  }
}
