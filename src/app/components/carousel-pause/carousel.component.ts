import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'w-carousel',
    standalone: true,
    imports: [NgbCarouselModule, FormsModule],
    templateUrl: './carousel.component.html',
    styles: ``
})
export class CarouselComponent {
    @Input() images: {
        src: string,
        width: string,
        height: string
    }[];

    interval = 4000;

    paused = false;
    unpauseOnArrow = false;
    pauseOnIndicator = false;
    pauseOnHover = true;
    pauseOnFocus = true;

    @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

}
