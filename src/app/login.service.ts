import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginView } from './login-view';
import { map } from'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUserName:any = null;

  //if we need all request to be intercepted
  // constructor(private httpClient: HttpClient) { }

  //no need to intercept
  private httpClient: HttpClient | null = null;
  constructor(private httpBackend: HttpBackend , private jwtHelper: JwtHelperService , private router: Router) { }

  public userLogin(authenticate: LoginView):Observable<any>{
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient.post<any>("http://localhost:9090/authenticate" , authenticate, {responseType: 'json'})
    .pipe(map(
      (user) => {
        if(user){
          this.currentUserName = user.userName;
          sessionStorage['currentUserDetails'] = JSON.stringify(user);
        }
        return user;
      }
    ));
  }
  
  public Logout (){
    sessionStorage['currentUserDetails'] = null;
    this.currentUserName = null;
    this.router.navigateByUrl("/login")
  }

  public isAuthenticated (): boolean{
    if(this.jwtHelper.isTokenExpired()){
      return false; //token expired
    }
    else{
      return true; //token valid
    }
  }
}
