import { Routes } from '@angular/router';
import { HamburgerListComponent } from '@component/hamburger-list/hamburger-list.component';

export const routes: Routes = [
  { path: 'hamburgers', component: HamburgerListComponent },
  { path: '', redirectTo: '/hamburgers', pathMatch: 'full' },
];