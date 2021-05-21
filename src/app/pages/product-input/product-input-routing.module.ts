import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductInputPage } from './product-input.page';

const routes: Routes = [
  {
    path: '',
    component: ProductInputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductInputPageRoutingModule {}
