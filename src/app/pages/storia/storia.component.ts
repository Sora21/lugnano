import { Component } from '@angular/core';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { ImageRowComponent } from '../../components/image-row/image-row.component';
import { aosInit } from '../../utils/aos-utils';
import { createPhotoswipeLightBox } from '../../utils/photoswipe-utils';

@Component({
    selector: 'w-storia',
    standalone: true,
    imports: [ImageRowComponent],
    templateUrl: './storia.component.html',
    styles: ``
})
export class StoriaComponent {
    lightbox: PhotoSwipeLightbox;

    ngOnInit() {
        this.lightbox = createPhotoswipeLightBox('storia-gallery');
        this.lightbox.init();
    }

    ngAfterViewInit() {
        aosInit();
    }

    ngOnDestroy() {
        this.lightbox.destroy();
    }

}
