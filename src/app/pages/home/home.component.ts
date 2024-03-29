import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FaIconComponent, FaStackComponent, FaStackItemSizeDirective } from '@fortawesome/angular-fontawesome';
import { faCircle, faLaptop, faLock, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { Image } from '../../typings/image';
import { createPhotoswipeLightBox } from '../../utils/photoswipe-utils';

@Component({
    selector: 'w-home',
    standalone: true,
    imports: [FaIconComponent, FaStackComponent, FaStackItemSizeDirective, ReactiveFormsModule],
    templateUrl: './home.component.html',
    styles: ``
})
export class HomeComponent {
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

    associationGallery: PhotoSwipeLightbox;
    associationImages: Image[] = [
        { src: 'assets/img/associazione/45.jpg', width: '2048', height: '1536' },
        { src: 'assets/img/associazione/44.jpg', width: '2048', height: '1536' },
        { src: 'assets/img/associazione/43.jpg', width: '2048', height: '1365' },
        { src: 'assets/img/associazione/38.jpg', width: '2048', height: '1115' },
        { src: 'assets/img/associazione/38_2.jpg', width: '2048', height: '1439' }
    ];

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.associationGallery = createPhotoswipeLightBox('associazione-gallery');
        this.associationGallery.init();
    }

    ngAfterViewInit() {
        //  Activate Bootstrap scrollspy on the main nav element
        // const navHeader = document.body.querySelector('#nav-header');
        // if (navHeader) {
        //     new ScrollSpy(document.body, {
        //         target: navHeader,
        //         rootMargin: '0px 0px -40%',
        //         smoothScroll: true,
        //     });
        // };
    }

    ngOnDestroy() {
        this.associationGallery.destroy();
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
