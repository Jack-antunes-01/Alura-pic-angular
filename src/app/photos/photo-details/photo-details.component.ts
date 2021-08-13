import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
    ){ }

    ngOnInit(): void{
        this.photoId = this.activatedRoute.snapshot.params.photoId;

        this.photo$ = this.photoService.findById(this.photoId);
        this.comment$ = this.photoService.getComments(this.photoId);
        
    }
};