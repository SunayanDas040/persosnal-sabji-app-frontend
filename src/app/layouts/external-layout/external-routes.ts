import { Routes } from '@angular/router';

export const ExternalRoutes: Routes = [
  {
    path: '',
    redirectTo: 'client',
    pathMatch: 'full',
  },
  {
    path: 'client',
    loadComponent: () =>
      import('./external-layout.component').then(
        (c) => c.ExternalLayoutComponent
      ),
    loadChildren: () =>
      import('../../features/client/client-routes').then((r) => r.ClientRoutes),
  },
];
