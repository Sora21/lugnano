import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NgbCollapse, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollSpy } from 'bootstrap';

@Component({
    selector: 'w-header',
    standalone: true,
    imports: [NgbCollapse, NgbNavModule, RouterLink, RouterLinkActive, FontAwesomeModule],
    templateUrl: './header.component.html',
    styles: ``
})
export class HeaderComponent {
    // navbarToggler: HTMLElement;
    bars = faBars;

    ngAfterViewInit() {
        // Shrink the navbar 
        this.navbarShrinkFn();

        // Shrink the navbar when page is scrolled
        document.addEventListener('scroll', this.navbarShrinkFn);

        //  Activate Bootstrap scrollspy on the main nav element
        const navHeader = document.body.querySelector('#nav-header');
        if (navHeader) {
            new ScrollSpy(document.body, {
                target: navHeader,
                rootMargin: '0px 0px -40%',
                smoothScroll: true,
            });
        };

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

        // const responsiveNavItems = [].slice.call(
        //     document.querySelectorAll('#navbarResponsive .nav-link')
        // );
    }

    navbarShrinkFn() {
        // Navbar shrink function
        const navbarCollapsible = document.body.querySelector('#nav-header');
        if (!navbarCollapsible) {
            return;
        }
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
