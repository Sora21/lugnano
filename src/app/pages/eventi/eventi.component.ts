import { Component } from '@angular/core';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { createPhotoswipeLightBox } from '../../utils/photoswipe-utils';

@Component({
    selector: 'w-eventi',
    standalone: true,
    imports: [CarouselComponent],
    templateUrl: './eventi.component.html',
    styles: ``
})
export class EventiComponent {
    eventiGallery: PhotoSwipeLightbox;
    eventiOldGallery: PhotoSwipeLightbox;

    images = [
        { src: 'assets/img/eventi/44.jpg', height: '1600', width: '1120' },
        { src: 'assets/img/eventi/43.jpg', height: '2048', width: '1448' },
        { src: 'assets/img/eventi/42.jpg', height: '1184', width: '810' },
        { src: 'assets/img/eventi/41.jpg', height: '1600', width: '1097' },
        { src: 'assets/img/eventi/40.jpg', height: '960', width: '672' },
        { src: 'assets/img/eventi/39.jpg', height: '945', width: '650' },
        { src: 'assets/img/eventi/38.jpg', height: '1181', width: '827' }
    ];

    ngOnInit() {
        this.eventiGallery = createPhotoswipeLightBox('eventi-gallery');
        this.eventiGallery.init();

        this.eventiOldGallery = createPhotoswipeLightBox('eventi-old-gallery');
        this.eventiOldGallery.init();
    }

    ngOnDestroy() {
        this.eventiGallery.destroy();
        this.eventiOldGallery.destroy();
    }

}
