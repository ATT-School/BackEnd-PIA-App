import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TareaInfoPage } from 'src/app/pages/tarea-info/tarea-info.page';
import { HttpProviderService } from 'src/app/Services/http-provider/http-provider.service';

@Component({
  selector: 'app-home-tab',
  templateUrl: 'home-tab.page.html',
  styleUrls: ['home-tab.page.scss']
})
export class HomeTabPage {

  constructor(private http: HttpProviderService, public modalController: ModalController) {}

  ngOnInit() {
    this.http.login("admin", "password").subscribe((data) => {console.log(data)});
  }


  async abrirModal() {
    const modal = await this.modalController.create({
      component: TareaInfoPage
    });
    return await modal.present();
  }

}
