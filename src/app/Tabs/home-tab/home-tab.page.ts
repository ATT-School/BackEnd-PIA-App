import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TareaInfoPage } from 'src/app/pages/tarea-info/tarea-info.page';

@Component({
  selector: 'app-home-tab',
  templateUrl: 'home-tab.page.html',
  styleUrls: ['home-tab.page.scss']
})
export class HomeTabPage {

  constructor(public modalController: ModalController) {}

  async abrirModal() {
    const modal = await this.modalController.create({
      component: TareaInfoPage
    });
    return await modal.present();
  }

}
