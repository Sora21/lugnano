import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NgbCollapse, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, filter } from 'rxjs';

@Component({
    selector: 'w-header',
    standalone: true,
    imports: [NgbCollapse, NgbNavModule, RouterLink, RouterLinkActive, FontAwesomeModule, CommonModule],
    templateUrl: './header.component.html',
    styles: ``
})
export class HeaderComponent {
    isHomeLayout = false;
    isHomeEventSubscription: Subscription;

    bars = faBars;

    HEADER_URL: string[] = ['/', '/#services', '/#portfolio', '/#about', '/#team', '/#contact'];

    constructor(private router: Router) { }

    ngOnInit() {
        this.isHomeEventSubscription = this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd)
        ).subscribe((event) => {
            this.isHomeLayout = this.HEADER_URL.includes((event as NavigationEnd).url);
        });
    }

    ngAfterViewInit() {
        // Shrink the navbar 
        this.navbarShrinkFn();

        // Shrink the navbar when page is scrolled
        document.addEventListener('scroll', this.navbarShrinkFn);

        // Collapse responsive navbar when toggler is visible
        const navbarToggler = document.body.querySelector('.navbar-toggler');
        const responsiveNavItems = [].slice.call(
            document.querySelectorAll('#navbarResponsive .nav-link')
        );
        responsiveNavItems.map(function (responsiveNavItem) {
            //@ts-ignore
            responsiveNavItem.addEventListener('click', () => {
                //@ts-ignore
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    //@ts-ignore
                    navbarToggler.click();
                }
            });
        });

    }

    ngOnDestroy() {
        document.removeEventListener('scroll', this.navbarShrinkFn);
        this.isHomeEventSubscription.unsubscribe();
    }

    // Navbar shrink function
    navbarShrinkFn() {
        const navbarCollapsible = document.body.querySelector('#nav-header');
        if (!navbarCollapsible)
            return;

        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    }

    // navbarResponsiveNavItemFn(responsiveNavItem, navbarToggler: HTMLElement) {
    //     responsiveNavItem.addEventListener('click', () => {
    //         if (window.getComputedStyle(navbarToggler).display !== 'none') {
    //             navbarToggler.click();
    //         }
    //     });
    // }

}
