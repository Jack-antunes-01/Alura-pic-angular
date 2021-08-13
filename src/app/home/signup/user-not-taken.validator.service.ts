import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, switchMap } from 'rxjs/operators';

import { SignUpService } from './signup.service';

@Injectable()
export class UserNotTakenValidatorService { 

    constructor(private signUpService: SignUpService){ }

    checkUsernameTaken() {
        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(userName => {
                    return this.signUpService.checkUsernameTaken(userName);
                }))
                .pipe(map(isTaken => isTaken ? { usernameTaken: true } : null ))
                .pipe(first());
        }
    }

}