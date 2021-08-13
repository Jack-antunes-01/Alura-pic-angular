import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OnOpenClickDirective } from './on-open-click.directive';

@NgModule({
    declarations: [
        OnOpenClickDirective,
    ],
    exports: [
        OnOpenClickDirective,
    ],
    imports: [
        CommonModule,
    ]
})
export class OnOpenClickModule {}
