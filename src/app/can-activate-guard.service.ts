import { Injectable, inject } from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})

class permissionsService{
  constructor(private loginService: LoginService , private router: Router, private jwtHelperService : JwtHelperService) { }

  canActivate(next: ActivatedRouteSnapshot , state: RouterStateSnapshot): boolean{
     const token = sessionStorage.getItem('currentUserDetails') && sessionStorage.getItem('currentUserDetails') !== "null" ? JSON.parse(sessionStorage.getItem('currentUserDetails') as string).token : null;
     console.log(this.jwtHelperService.decodeToken(token), state);
      if(this.loginService.isAuthenticated() && this.jwtHelperService.decodeToken(token).role === next.data['expectedRole']){
        return true;
      }
      else{
        this.router.navigateByUrl('/login');
        return false;
      }
  }

}

export const CanActivateGuardService: CanActivateFn = (next: ActivatedRouteSnapshot , state: RouterStateSnapshot) : boolean => {
  return inject(permissionsService).canActivate(next, state);
}
