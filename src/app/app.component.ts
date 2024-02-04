import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet, RoutesRecognized } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import packageJson from '../../package.json';
import { DEFAULT_SUB_HEADING } from './app.routes';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from "./components/header/header.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styles: '',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, NgbNavModule, FontAwesomeModule, RouterLink, RouterLinkActive]
})
export class AppComponent {
    twitter = faTwitter;
    facebook = faFacebookF;
    linkedin = faLinkedinIn;

    isHomePage: boolean;

    heading: string;
    subHeading: string;
    isSubHeadingVisible: boolean = true;
    headingsSubscription: Subscription;

    constructor(private router: Router) {
        // listen to page variable from router events
        this.headingsSubscription = router.events.subscribe(event => {
            if (event instanceof RoutesRecognized) {
                let route = event.state.root.firstChild;

                this.isHomePage = route.routeConfig.path == '';

                if (!route.data['subHeading']) {
                    this.isSubHeadingVisible = false;
                    this.subHeading = DEFAULT_SUB_HEADING;
                } else {
                    this.isSubHeadingVisible = true;
                    this.subHeading = route.data['subHeading'];
                }

                this.heading = route.data['heading'];
            }
        });

        console.log("Version: " + packageJson.version);
    }

    ngOnDestroy() {
        this.headingsSubscription.unsubscribe();
    }

}
