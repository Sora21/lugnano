import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from "./components/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styles: '',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, NgbNavModule]
})
export class AppComponent {

}
