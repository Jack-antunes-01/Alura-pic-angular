import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/user/user.service';
import { Alert } from 'src/app/shared/components/alert/alert';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { PhotoProps } from '../photo/photo';
import { PhotoCommentProps } from '../photo/photo-comment';
import { PhotoService } from '../photo/photo.service';

@Component({
    templateUrl: './photo-details.component.html',
})
export class PhotoDetailsComponent implements OnInit{
    
    photo$: Observable<PhotoProps>;
    comment$: Observable<PhotoCommentProps[]>;
    photoId: number;

    constructor(
        private activatedRoute: ActivatedRoute,
        private photoService: PhotoService,
        private router: Router,
        private alertService: AlertService,
        private userService: UserService,
    ){ }

    ngOnInit(): void{
        this.photoId = this.activatedRoute.snapshot.params.photoId;

        this.photo$ = this.photoService.findById(this.photoId);
        this.comment$ = this.photoService.getComments(this.photoId);
        this.photo$.subscribe(() => {}, err => {
            console.log(err);
            this.router.navigate(['not-found']);
        })
    }

    removePhoto(){
        this.photoService
            .removePhoto(this.photoId)
            .subscribe(
                () => {
                    this.alertService.success("Foto removida", true)
                    this.router.navigate(['/user', this.userService.getUsername()]);
                },
                err => {
                    this.alertService.warning("Erro ao remover foto");
                }
            )
    }

    like(photo: PhotoProps) {
    

        this.photoService
            .like(photo.id)
            .subscribe(liked => {
                if(liked) {
                    this.photo$ = this.photoService.findById(photo.id);
                }
            },
            err => alert(err));
    }
};