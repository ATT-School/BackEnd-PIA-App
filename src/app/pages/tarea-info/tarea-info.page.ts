import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tarea-info',
  templateUrl: './tarea-info.page.html',
  styleUrls: ['./tarea-info.page.scss'],
})
export class TareaInfoPage implements OnInit {

  constructor(private modalController: ModalController) { }

  equipo=[
    "José Santos Flores Silva",
    "Edson Yael García Silva",
    "Sofía Alejandra Gaytán Díaz",
    "Ángel Tejeda Tiscareño"
  ]

  ngOnInit() {
  }

  salir(){
    this.modalController.dismiss();
  }

}
