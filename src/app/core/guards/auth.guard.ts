import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/features/auth/services/user.service';
import { AppConstants } from '../data/app-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: UserService, private router: Router) {
  }
  canActivate(){
    if(!this.authService.isAuthenticate()){
      localStorage.removeItem(AppConstants.LocalStorage.Usuario);
      localStorage.removeItem(AppConstants.LocalStorage.Menu);
      localStorage.removeItem(AppConstants.LocalStorage.NebularToken);
      this.router.navigate(['/auth']);
      return false;
    }
    return true;
  }
  
}
