import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductInputPageRoutingModule } from './product-input-routing.module';

import { ProductInputPage } from './product-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductInputPageRoutingModule
  ],
  declarations: [ProductInputPage]
})
export class ProductInputPageModule {}
