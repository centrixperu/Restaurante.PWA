import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppConstants } from 'src/app/core/data/app-constants';
import { UserData } from 'src/app/core/data/user';
import { Usuario } from 'src/app/core/models/usuario.model';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends UserData  {
  isAuthenticate(): boolean {
    let authAppToken: { value: '' };
    authAppToken = JSON.parse(localStorage.getItem(AppConstants.LocalStorage.NebularToken));
    if (authAppToken == null || authAppToken == undefined) {
      return false;
    } 
    else {
      if (authAppToken.value.length == 0) {
        return false;
      } 
      else {
        return true;
      }
    }

  }
  constructor(private apiService: ApiService, private toastr: ToastrService) { 
    super();
  }
  setToken(token: string) {
    let authAppToken: {};
    authAppToken = JSON.parse(localStorage.getItem(AppConstants.LocalStorage.NebularToken));
    if (authAppToken == null || authAppToken == undefined) {
      authAppToken = {
        createdAt: Date.now(),
        name: "nb:auth:jwt:token",
        ownerStrategyName: "email",
        value: token
      };
    }
    localStorage.setItem(AppConstants.LocalStorage.NebularToken, JSON.stringify(authAppToken));
  }
  setLogOut() {
    localStorage.removeItem(AppConstants.LocalStorage.Usuario);
    localStorage.removeItem(AppConstants.LocalStorage.Menu);
    localStorage.removeItem(AppConstants.LocalStorage.NebularToken);
  }
  private getUserFromLocalStorage(): Usuario {
    return JSON.parse(localStorage.getItem(AppConstants.LocalStorage.Usuario));
  }
  getLogo(): string {
    return this.getUserFromLocalStorage().logo;
  }

}
