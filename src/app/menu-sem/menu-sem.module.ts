import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuSemPageRoutingModule } from './menu-sem-routing.module';

import { MenuSemPage } from './menu-sem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuSemPageRoutingModule
  ],
  declarations: [MenuSemPage]
})
export class MenuSemPageModule {}
