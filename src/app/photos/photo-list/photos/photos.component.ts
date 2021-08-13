import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhotoProps } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() listaFotos: PhotoProps[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.listaFotos) {
      this.rows = this.groupColumns(this.listaFotos);
    }
  }

  groupColumns(photos: PhotoProps[]) {
    const newRows = [];

    for (let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3));
    }

    return newRows;
  }

}
