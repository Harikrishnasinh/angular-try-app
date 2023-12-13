import { CanActivateFn } from '@angular/router';

export const studentGGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem("userLoggedIn") == "true"){
    return true
  }else{
    return false
  }
};
