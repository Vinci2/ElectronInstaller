import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome'
  },
  { path: 'welcome', loadChildren: './modules/welcome/welcome.module#WelcomeModule' },
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule' }
];
