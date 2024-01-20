import { Component } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'w-header',
    standalone: true,
    imports: [NgbCollapse],
    templateUrl: './header.component.html',
    styles: ``
})
export class HeaderComponent {
    isMenuCollapsed = false;

}
