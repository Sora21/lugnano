import { Component } from '@angular/core';
import { FaIconComponent, FaStackComponent, FaStackItemSizeDirective } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCircle, faLaptop, faLock, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'w-home',
    standalone: true,
    imports: [FaIconComponent, FaStackComponent, FaStackItemSizeDirective],
    templateUrl: './home.component.html',
    styles: ``
})
export class HomeComponent {
    twitter = faTwitter;
    facebook = faFacebookF;
    linkedin = faLinkedinIn;

    circle = faCircle;
    shoppingCart = faShoppingCart;
    laptop = faLaptop;
    lock = faLock;

}
