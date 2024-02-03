import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FaIconComponent, FaStackComponent, FaStackItemSizeDirective } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCircle, faLaptop, faLock, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ScrollSpy } from 'bootstrap';

@Component({
    selector: 'w-home',
    standalone: true,
    imports: [FaIconComponent, FaStackComponent, FaStackItemSizeDirective, ReactiveFormsModule],
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

    isValidating = false;
    contactForm = this.formBuilder.group({
        name: '',
        email: '',
        message: ''
    });

    constructor(private formBuilder: FormBuilder) { }

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

    validate(input: Event, isRemovingValidation = false) {
        if (!this.isValidating)
            return;

        const inputTarget = input.target as HTMLInputElement;
        if (isRemovingValidation) {
            inputTarget.classList.remove("is-invalid");
            return;
        }

        if (inputTarget.required && !inputTarget.value) {
            inputTarget.classList.add("is-invalid");
        }
    }

    onSubmit() {
        this.isValidating = true;

        let isInvalid = !this.contactForm.controls.name.value ||
            !this.contactForm.controls.email.value ||
            !this.contactForm.controls.message.value;

        if (isInvalid) {
            console.warn("Dati mancanti");
            return;
        }

        console.log("MESSAGGIO INVIATO");
        // this.contactForm.reset();
    }
}
