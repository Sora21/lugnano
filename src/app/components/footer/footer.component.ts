import { Component } from '@angular/core';
import dayjs from 'dayjs';

@Component({
    selector: 'w-footer',
    standalone: true,
    imports: [],
    templateUrl: './footer.component.html',
    styles: ``
})
export class FooterComponent {
    currentYear = dayjs().year();
}
