import { Component } from '@angular/core';
import { NgbCollapse, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'w-header',
    standalone: true,
    imports: [NgbCollapse, NgbNavModule],
    templateUrl: './header.component.html',
    styles: ``
})
export class HeaderComponent {
    isMenuCollapsed = false;
    active = 1;
}
