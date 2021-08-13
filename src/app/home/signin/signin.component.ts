import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

import { AuthService } from '../../core/auth/auth.service';

@Component({
    templateUrl: './signin.component.html',
})
export class SignInComponent  implements OnInit{ 

    loginForm: FormGroup;
    @ViewChild('userInput') userInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService,
    ){ }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            user: ['', Validators.required],
            password: ['', Validators.required],
        })
        this.platformDetectorService.isPlatformBrowser () && 
            this.userInput.nativeElement.focus();
    }

    login(){
        const user = this.loginForm.get('user').value;
        const password = this.loginForm.get('password').value;

        this.authService
            .authenticate(user, password)
            .subscribe(
                () => {
                    this.router.navigate(['user', user]);
                },
                err => {
                    console.log(err);
                    alert("Usuário ou senha inválidos");
                    
                    this.platformDetectorService.isPlatformBrowser () && 
                        this.userInput.nativeElement.focus();
                    
                    this.loginForm.reset();
                } 
            );
    }

}