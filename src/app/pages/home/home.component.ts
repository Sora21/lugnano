import { Component } from '@angular/core';
import { FaIconComponent, FaStackComponent, FaStackItemSizeDirective } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCircle, faLaptop, faLock, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ScrollSpy } from 'bootstrap';

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

    ngAfterViewInit() {
        //  Activate Bootstrap scrollspy on the main nav element
        const navHeader = document.body.querySelector('#nav-header');
        if (navHeader) {
            new ScrollSpy(document.body, {
                target: navHeader,
                rootMargin: '0px 0px -40%',
                smoothScroll: true,
            });
        };
    }
}
