import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TareaInfoPage } from './tarea-info.page';

const routes: Routes = [
  {
    path: '',
    component: TareaInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TareaInfoPageRoutingModule {}
