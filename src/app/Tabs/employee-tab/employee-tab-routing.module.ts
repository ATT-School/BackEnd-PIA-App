import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTabPage } from './employee-tab.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeTabPageRoutingModule {}
