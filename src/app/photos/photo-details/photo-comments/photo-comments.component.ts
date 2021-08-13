import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { PhotoCommentProps } from '../../photo/photo-comment';
import { PhotoService } from '../../photo/photo.service';

@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html',
})
export class PhotoCommentsComponent implements OnInit{
    
    @Input() photoId: number;
    comments$: Observable<PhotoCommentProps[]>;
    
    commentForm: FormGroup;

    constructor(
        private photoService: PhotoService,
        private formBuilder: FormBuilder,
    ){ }

    ngOnInit(): void {
        this.comments$ = this.photoService.getComments(this.photoId);

        console.log(this.comments$);

        this.commentForm = this.formBuilder.group({
            comment: ['', Validators.maxLength(300)],
        })
    }

};