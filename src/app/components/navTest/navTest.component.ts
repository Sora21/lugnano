import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'w-navTest',
    standalone: true,
    imports: [NgbNavModule],
    templateUrl: './navTest.component.html',
})
export class NavTest {
    active = 1;
}
