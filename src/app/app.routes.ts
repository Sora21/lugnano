import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StoriaComponent } from './pages/storia/storia.component';

export const routes: Routes = [
    { path: '', title: 'Home', component: HomeComponent },
    { path: 'storia-page', title: 'Storia', component: StoriaComponent },
];
