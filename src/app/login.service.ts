import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginView } from './login-view';
import { map } from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUserName:any = null;

  constructor(private httpClient: HttpClient) { }

  public userLogin(authenticate: LoginView):Observable<any>{
    return this.httpClient.post<any>("http://localhost:9090/authenticate" , authenticate, {responseType: 'json'})
    .pipe(map(
      (user) => {
        if(user){
          this.currentUserName = user.userName;
        }
        return user;
      }
    ));
  }
  
  public Logout (){
    this.currentUserName = null;
  }
}
