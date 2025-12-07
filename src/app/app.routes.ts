import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'country-list',
    pathMatch: 'full',
  },
  {
    path: 'country-list',
    loadComponent: () => import('./pages/country-list/country-list.page').then(m => m.CountryListPage)
  },
  {
    path: 'country-detail/:name',
    loadComponent: () => import('./pages/country-detail/country-detail.page').then(m => m.CountryDetailPage)
  },
];
