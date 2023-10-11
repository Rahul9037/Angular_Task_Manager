import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginView } from './login-view';
import { map } from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUserName:any = null;

  //if we need all request to be intercepted
  // constructor(private httpClient: HttpClient) { }

  //no need to intercept
  private httpClient: HttpClient | null = null;
  constructor(private httpBackend: HttpBackend) { }

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
  }
}
