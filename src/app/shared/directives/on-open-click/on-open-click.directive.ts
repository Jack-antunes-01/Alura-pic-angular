import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Directive({
    selector: '[onOpenClick]'
})
export class OnOpenClickDirective implements OnInit {

    constructor(
        private el : ElementRef<any>,
        private platformDetectorService: PlatformDetectorService,
    ) { }
    
    ngOnInit(): void{
        this.platformDetectorService.isPlatformBrowser() &&
            this.el.nativeElement.click();   
    }

}

