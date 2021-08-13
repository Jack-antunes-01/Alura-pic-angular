import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoDetailsComponent } from './photo-details.component';

@NgModule({
    declarations: [
        PhotoDetailsComponent,
        PhotoCommentsComponent,
    ],
    exports: [
        PhotoDetailsComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        PhotoModule,
        RouterModule,   
        ReactiveFormsModule,
        VMessageModule,
    ],
})
export class PhotoDetailsModule {}