import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    user: string;

    constructor(
        private userService: UserService,
        private router: Router,
    ){ }
    
    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
            if(this.userService.isLogged()) {
                this.user = this.userService.getUsername();
                this.router.navigate(['user', this.user]);
                return false;
            }
            return true;
    }

 }