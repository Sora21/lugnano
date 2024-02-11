import { Component, Input } from '@angular/core';

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

    @Input() firstImage: {
        src: string,
        heigth: string,
        width: string
    }

    @Input() secondImage: {
        src: string,
        heigth: string,
        width: string
    }

}
