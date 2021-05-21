import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerInputPage } from './customer-input.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerInputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerInputPageRoutingModule {}
