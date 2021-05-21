import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpInfoPageRoutingModule } from './help-info-routing.module';

import { HelpInfoPage } from './help-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpInfoPageRoutingModule
  ],
  declarations: [HelpInfoPage]
})
export class HelpInfoPageModule {}
