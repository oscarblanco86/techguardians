import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
    {
        path:'',
        component: WelcomeComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'signup',
        component:SignupComponent
    }
];
