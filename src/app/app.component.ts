import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from "./components/header/header.component";
import { ContattiComponent } from "./pages/contatti/contatti.component";
import { EventiComponent } from "./pages/eventi/eventi.component";
import { MadonninaComponent } from "./pages/madonnina/madonnina.component";
import { SponsorComponent } from "./pages/sponsor/sponsor.component";
import { StoriaComponent } from "./pages/storia/storia.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styles: '',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, NgbNavModule, StoriaComponent, MadonninaComponent, EventiComponent, SponsorComponent, ContattiComponent]
})
export class AppComponent {

}
