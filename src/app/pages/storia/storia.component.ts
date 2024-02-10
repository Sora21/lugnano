import { Component } from '@angular/core';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeLightbox from 'photoswipe/lightbox';

@Component({
    selector: 'w-storia',
    standalone: true,
    imports: [],
    templateUrl: './storia.component.html',
    styles: ``
})
export class StoriaComponent {
    lightbox: PhotoSwipeLightbox;

    ngOnInit() {
        this.lightbox = new PhotoSwipeLightbox({
            gallery: '#storia-gallery',
            children: 'a',
            pswpModule: PhotoSwipe,
        });
        this.lightbox.init();
    }

    ngOnDestroy() {
        this.lightbox.destroy();
    }

}
