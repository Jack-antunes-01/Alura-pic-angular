import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotoProps } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: PhotoProps[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = ''; 

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) { }
  
  
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.userName = params.username;
      this.photos = this.activatedRoute.snapshot.data.photos;
    });
  }

  load(){
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
          this.filter = '';  
          this.photos = this.photos.concat(photos);
          if(!photos.length) this.hasMore = false;
        }
      );
    
  }
}
