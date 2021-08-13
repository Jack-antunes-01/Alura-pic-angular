import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from './new-user';

const API = "http://localhost:3000";

@Injectable()
export class SignUpService { 

    constructor(private http: HttpClient){ }


    checkUsernameTaken(username: string){
        return this.http.get(API + '/user/exists/' + username); 
    }

    signup(newUser: NewUser){
        return this.http.post(API + '/user/signup', newUser);
    }

}