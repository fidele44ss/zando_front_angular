import {RouterModule, Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'',
        loadComponent : () =>import('./pages/home/home').then(a=> a.Home) 
    },
    {
        path:'login',
        loadComponent : () =>import('./pages/login/login').then(a=> a.Login) 
    },
     


];
