import { Routes } from '@angular/router';
import { EventiComponent } from './pages/eventi/eventi.component';
import { HomeComponent } from './pages/home/home.component';
import { MadonninaComponent } from './pages/madonnina/madonnina.component';
import { SponsorComponent } from './pages/sponsor/sponsor.component';
import { StoriaComponent } from './pages/storia/storia.component';

export const routes: Routes = [
    { path: '', title: 'Home', component: HomeComponent, data: { subHeading: 'Benvenuti a', heading: 'Lugnano' } },
    { path: 'home', title: 'Home', component: HomeComponent, data: { subHeading: 'Benvenuti a', heading: 'Lugnano' } },
    { path: 'storia', title: 'La Storia', component: StoriaComponent, data: { heading: 'La Storia' } },
    { path: 'madonnina', title: 'La Madonnina', component: MadonninaComponent, data: { heading: 'La Madonnina' } },
    { path: 'eventi', title: 'Eventi', component: EventiComponent, data: { heading: 'Eventi' } },
    { path: 'sponsor', title: 'Sponsor', component: SponsorComponent, data: { heading: 'Sponsor' } },
];
