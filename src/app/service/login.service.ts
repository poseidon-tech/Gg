import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {


   }
   login(jwt:any)
   {
    localStorage.setItem("token",jwt)
   }
   isUserLoggedIn() {
    let token = localStorage.getItem("token");
    if(token==undefined ||token ===''||token==null)
    return false;
    else
    return true;
  }

  logOut() {
    localStorage.removeItem("token");
    
  }
  getToken()
  {
    return localStorage.getItem("token")
  }
}
