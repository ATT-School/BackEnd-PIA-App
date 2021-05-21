import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home-tab',
        loadChildren: () => import('../home-tab/home-tab.module').then(m => m.HomeTabPageModule)
      },
      {
        path: 'customer-tab',
        loadChildren: () => import('../customer-tab/customer-tab.module').then(m => m.CustomerTabPageModule)
      },
      {
        path: 'employee-tab',
        loadChildren: () => import('../employee-tab/employee-tab.module').then(m => m.EmployeeTabPageModule)
      },
      {
        path: 'product-tab',
        loadChildren: () => import('../product-tab/product-tab.module').then(m => m.ProductTabPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home-tab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
