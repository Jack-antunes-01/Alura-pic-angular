import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PhotoProps } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Injectable({
    providedIn: 'root',
})
export class PhotoListResolver implements Resolve<Observable<PhotoProps[]>> {
    constructor(private service: PhotoService){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PhotoProps[]>{
        const username = route.params.username;
        
        return this.service.listFromUserPaginated(username, 1   );
    }
}