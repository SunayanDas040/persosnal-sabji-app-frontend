import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full',
  },
  {
    path: 'app',
    loadChildren: () => import('./layouts/external-layout/external-routes').then(r => r.ExternalRoutes)
  },
  {
    path: 'internal',
    loadComponent: () =>
      import('./layouts/internal-layout/internal-layout.component').then(
        (c) => c.InternalLayoutComponent
      ),
  },
];
