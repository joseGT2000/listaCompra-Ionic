import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuSemPage } from './menu-sem.page';

const routes: Routes = [
  {
    path: '',
    component: MenuSemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuSemPageRoutingModule {}
