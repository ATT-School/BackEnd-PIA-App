import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerTab } from './customer-tab.page';

import { CustomerTabPageRoutingModule } from './customer-tab-routing.module';

import { ComponentsModule } from '../../Components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CustomerTabPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CustomerTab]
})
export class CustomerTabPageModule {}
