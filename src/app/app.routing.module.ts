import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequireAuthGuard } from './core/auth/require-auth.guard';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';

const routes: Routes = [
    { 
        path: '', 
        pathMatch: 'full',
        redirectTo: 'home',
    },
    { 
        path: 'home', 
        loadChildren: './home/home.module#HomeModule',
    },
    { 
        path: 'user/:username', 
        component: PhotoListComponent,
        resolve: {
            photos: PhotoListResolver
        },
    },
    { 
        path: 'p/add', 
        component: PhotoFormComponent, 
        canActivate: [
            RequireAuthGuard,
        ]
    },
    { 
        path: 'p/:photoId', 
        component: PhotoDetailsComponent, 
    },
    { 
        path: 'not-found', 
        component: NotFoundComponent 
    },
    { 
        path: '**', 
        component: NotFoundComponent, 
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {

}