import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as jwtDecode from 'jwt-decode';

import { TokenService } from '../token/token.service';
import { User } from './user';

@Injectable({
    providedIn: 'root',
})
export class UserService { 

    username: string;
    private userSubject = new BehaviorSubject<User>(null);

    constructor(
        private tokenService: TokenService, 
    ){ 
        tokenService.hasToken() && this.decodeAndNotify();
    }

    setToken(token: string){
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser(){
        return this.userSubject.asObservable();     
    }

    private decodeAndNotify(){
        const token = this.tokenService.getToken();
        const user = jwtDecode(token) as User;
        this.username = user.name;
        this.userSubject.next(user);
    }

    logout(){
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged(){
        return this.tokenService.hasToken();
    }

    getUsername(){
        return this.username;
    }

}