import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import dayjs from 'dayjs';

@Component({
    selector: 'w-footer',
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './footer.component.html',
    styles: ``
})
export class FooterComponent {
    currentYear = dayjs().year();

    facebook = faFacebookF;
    instagram = faInstagram;
}
