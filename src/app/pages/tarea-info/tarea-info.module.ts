import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TareaInfoPageRoutingModule } from './tarea-info-routing.module';

import { TareaInfoPage } from './tarea-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TareaInfoPageRoutingModule
  ],
  declarations: [TareaInfoPage]
})
export class TareaInfoPageModule {}
