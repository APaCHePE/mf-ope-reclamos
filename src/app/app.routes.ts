import { Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

export const routes: Routes = [
  {
    path: 'operaciones/reclamos/dashboard',
    loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent),
  },
  {
    path: 'operaciones/reclamos/prueba',
    loadComponent: () => import('./components/prueba/prueba.component'),
  },
  {
    path: 'operaciones/reclamos/nuevo',
    loadComponent: () => import('./components/nuevo/nuevo.component'),
  },
  {
    path: 'operaciones/reclamos/modificar',
    loadComponent: () => import('./components/modificar/modificar.component'),
  },
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: 'comercial/consultas/modificar',
  //       loadComponent: () => import('./menu/menu.component').then(m => m.MenuComponent),
  //     },
      // {
      //   path: 'comercial/configurar',
      //   loadComponent: () => import('.//configurar.component').then(m => m.ConfigurarComponent),
      // },
  //   ]
  // },
  // {
  //   path: 'productos/modificar',
  //   loadComponent: () => import('./modificar/modificar.component'),
  // },
  // {
  //   path: 'productos/exportar',
  //   loadComponent: () => import('./menu/menu.component'),
  // },
  // {
  //   path: 'productos/configurar',
  //   loadComponent: () => import('./layout/layout.component'),
  // },
  {
    path: '**',
    component: EmptyRouteComponent,
  },
];
