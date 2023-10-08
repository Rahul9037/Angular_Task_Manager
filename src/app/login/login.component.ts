import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { LoginView } from '../login-view';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginErroressage:any = null;
  loginViewModal: LoginView = new LoginView();

  constructor(private loginService: LoginService, private router: Router){

  }

  ngOnInit(): void {
      
  }

  login(event:any){
    console.log(this.loginViewModal)
    this.loginService.userLogin(this.loginViewModal).subscribe({
      next: (user) => {
        if(user){
          this.router.navigateByUrl("/dashboard")
        }
      },
      error: (err) => {
        console.log(err)
        this.loginErroressage = "Invalid Username or Password"
      }
    })
  }

}
