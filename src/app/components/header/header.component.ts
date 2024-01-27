import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NgbCollapse, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

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

}
