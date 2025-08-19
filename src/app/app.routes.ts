import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'   // asegura que se cargue 'main' al inicio
  },
  {path: 'main', loadComponent: () => import('./main/main.page').then(m => m.MainPage)},
  {
    path: 'productos',
    loadComponent: () => import('./productos/productos.page').then( m => m.ProductosPage)
  }

];
