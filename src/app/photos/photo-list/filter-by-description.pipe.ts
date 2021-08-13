import { Pipe, PipeTransform } from '@angular/core';
import { PhotoProps } from '../photo/photo';

@Pipe({
    name: 'filterByDescription',
})
export class FilterByDescription implements PipeTransform {
    transform(photos: PhotoProps[], descriptionQuery: string) {
       const description = descriptionQuery.trim().toLowerCase();

        if(description) return photos.filter((el) => el.description.toLowerCase().includes(description));
        else return photos;
    }
}