import { Observable } from "rxjs";

export abstract class UserData {
  
    abstract getLogo();
  
    abstract setLogOut();
  
    abstract setToken(token:String);
  
    abstract isAuthenticate():boolean;
    
  }