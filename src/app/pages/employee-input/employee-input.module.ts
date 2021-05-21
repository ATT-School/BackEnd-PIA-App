import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeInputPageRoutingModule } from './employee-input-routing.module';

import { EmployeeInputPage } from './employee-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeInputPageRoutingModule
  ],
  declarations: [EmployeeInputPage]
})
export class EmployeeInputPageModule {}
