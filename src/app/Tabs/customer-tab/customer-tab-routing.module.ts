import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerTab } from './customer-tab.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerTab,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerTabPageRoutingModule {}
