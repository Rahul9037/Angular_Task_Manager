import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JWTUnAutherizedInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap({
        next: (event : HttpEvent<any>) => {
          if(event instanceof HttpResponse){
            //anhy thing related to response 
          }
        },
        error: (err : any) => {
          if(err instanceof HttpErrorResponse){
            if(err.status == 401){
              console.log(err);
              alert("UnAuthrized error");
            }
          }
        }
      })
    )
  }
}
