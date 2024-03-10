import { Component, Input } from '@angular/core';
import { Image } from '../../typings/image';

@Component({
    selector: 'w-image-row',
    standalone: true,
    imports: [],
    templateUrl: './image-row.component.html',
    styles: ``
})
export class ImageRowComponent {
    @Input() isLast: boolean = false;

    @Input() normalizeHeightClass: 'sm' | 'lg';

    @Input() firstImage: Image
    @Input() secondImage: Image

}
