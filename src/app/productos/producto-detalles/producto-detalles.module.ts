import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoDetallesPageRoutingModule } from './producto-detalles-routing.module';

import { ProductoDetallesPage } from './producto-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoDetallesPageRoutingModule
  ],
  declarations: [ProductoDetallesPage]
})
export class ProductoDetallesPageModule {}
