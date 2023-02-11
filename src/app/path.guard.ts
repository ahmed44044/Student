import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PathGuard implements CanActivate {
  constructor(private _router:Router){}
  canActivate():boolean {
    if(localStorage.getItem('token')!=null){
      return true;
    }
    else
    {
      this._router.navigate(['/login'])
      return false;
    }
    return true;
  }
  
}
