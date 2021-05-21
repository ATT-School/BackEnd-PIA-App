import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeInputPage } from './employee-input.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeInputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeInputPageRoutingModule {}
