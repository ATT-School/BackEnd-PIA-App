import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-help-info',
  templateUrl: './help-info.page.html',
  styleUrls: ['./help-info.page.scss'],
})
export class HelpInfoPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

    salir(){
    this.modalController.dismiss();
  }

}
