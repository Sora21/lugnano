import { Component } from '@angular/core';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeLightbox from 'photoswipe/lightbox';

@Component({
    selector: 'w-madonnina',
    standalone: true,
    imports: [],
    templateUrl: './madonnina.component.html',
    styles: ``
})
export class MadonninaComponent {
    lightbox: PhotoSwipeLightbox;

    ngOnInit() {
        this.lightbox = new PhotoSwipeLightbox({
            gallery: '#madonnina-gallery',
            children: 'a',
            pswpModule: PhotoSwipe,
        });
        this.lightbox.init();
    }

    ngOnDestroy() {
        this.lightbox.destroy();
    }
}
