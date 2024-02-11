import { Component } from '@angular/core';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { ImageRowComponent } from "../../components/image-row/image-row.component";
import { aosInit } from '../../utils/aos-utils';
import { createPhotoswipeLightBox } from '../../utils/photoswipe-utils';

@Component({
    selector: 'w-madonnina',
    standalone: true,
    templateUrl: './madonnina.component.html',
    styles: ``,
    imports: [ImageRowComponent]
})
export class MadonninaComponent {
    lightbox: PhotoSwipeLightbox;

    ngOnInit() {
        this.lightbox = createPhotoswipeLightBox('madonnina-gallery');
        this.lightbox.init();
    }

    ngAfterViewInit() {
        aosInit();
    }

    ngOnDestroy() {
        this.lightbox.destroy();
    }
}
