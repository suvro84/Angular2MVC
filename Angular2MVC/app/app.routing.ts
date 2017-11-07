import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { HomeComponent } from './components/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { RegistrationComponent } from './components/Registration/Registration.component';



const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent }
    , { path: 'fetchdata', component: FetchDataComponent }
    , { path: 'Registration', component: RegistrationComponent }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);