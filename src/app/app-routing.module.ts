import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./components/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'menu-sem',
    loadChildren: () => import('./menu-sem/menu-sem.module').then( m => m.MenuSemPageModule)
  },
  {
    path: 'lista-compra',
    loadChildren: () => import('./lista-compra/lista-compra.module').then( m => m.ListaCompraPageModule)
  },
  {
    path: 'add-producto',
    loadChildren: () => import('./lista-compra/add-producto/add-producto.module').then( m => m.AddProductoPageModule)
  },
  {
    path: 'productos',
    children: [
      {
        path:"",
        loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
      }, 
      {
        path:":id",
        loadChildren: () => import('./productos/producto-detalles/producto-detalles.module').then( m => m.ProductoDetallesPageModule)
      }
    ]
  },
  {
    path: 'add-lista',
    loadChildren: () => import('./productos/producto-add/producto-add.module').then( m => m.ProductoAddPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
