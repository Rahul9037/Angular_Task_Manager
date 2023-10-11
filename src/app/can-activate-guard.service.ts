import { Injectable, inject } from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

class permissionsService{
  constructor(private loginService: LoginService , private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot , state: RouterStateSnapshot): boolean{
     console.log(next, state);
      if(this.loginService.isAuthenticated()){
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
