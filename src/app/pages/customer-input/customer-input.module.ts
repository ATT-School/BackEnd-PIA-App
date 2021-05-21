import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerInputPageRoutingModule } from './customer-input-routing.module';

import { CustomerInputPage } from './customer-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerInputPageRoutingModule
  ],
  declarations: [CustomerInputPage]
})
export class CustomerInputPageModule {}
