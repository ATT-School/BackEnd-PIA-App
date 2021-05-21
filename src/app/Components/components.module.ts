import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerInfoComponent} from './customer-info/customer-info.component';
import {ProductInfoComponent} from './product-info/product-info.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmployeeInfoComponent,
    CustomerInfoComponent,
    ProductInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EmployeeInfoComponent,
    CustomerInfoComponent,
    ProductInfoComponent,
  ]
})
export class ComponentsModule { }
