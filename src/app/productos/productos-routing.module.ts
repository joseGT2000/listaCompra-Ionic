import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosPage } from './productos.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosPage
  },
  {
    path: 'add-producto',
    loadChildren: () => import('./producto-add/producto-add.module').then( m => m.ProductoAddPageModule)
  },
  {
    path: 'producto-detalles',
    loadChildren: () => import('./producto-detalles/producto-detalles.module').then( m => m.ProductoDetallesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosPageRoutingModule {}
