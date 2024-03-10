import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Image } from '../../typings/image';

@Component({
    selector: 'w-carousel',
    standalone: true,
    imports: [NgbCarouselModule, FormsModule],
    templateUrl: './carousel.component.html',
    styles: ``
})
export class CarouselComponent {
    @Input() images: Image[];

    interval = 4000;

    paused = false;
    unpauseOnArrow = false;
    pauseOnIndicator = false;
    pauseOnHover = true;
    pauseOnFocus = true;

    @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

}
