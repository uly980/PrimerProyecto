import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home';
import { Login } from './componentes/login/login';


export const routes: Routes = [
    { path: '', component : Login},
    { path: 'home', component : HomeComponent }
];
