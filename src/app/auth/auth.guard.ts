import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './authservice';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checklogin(url);
  }

  checklogin(url: string): boolean {
    console.log('IsLogedIn:' + this.authService.token);
    if (this.authService.token) {
    return true;
    }
    this.authService.redirectUrl = url;

    this.router.navigate(['/login']);
    return false;
  }

}
