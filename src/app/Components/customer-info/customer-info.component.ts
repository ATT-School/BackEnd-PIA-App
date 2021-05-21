import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {CustomerModels} from 'src/app/models/customer-models';
import { CustomerInputPage } from 'src/app/pages/customer-input/customer-input.page';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss'],
})
export class CustomerInfoComponent implements OnInit {

  @Input() customer: CustomerModels.ICustomer;

  @Output() deleteEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();

  editing: boolean = false;

  constructor(public modalController:ModalController) { }

  ngOnInit() {}

  delete(id: string) {
    this.deleteEvent.emit(id);
  }

  update(id: string) {
    this.abrirModal(true, false);
    //this.updateEvent.emit(id);
  }

  toggleEditing() {
    this.editing = !this.editing;
  }

  async abrirModal(editable: boolean, agregable: boolean) {
    let myEvent = new EventEmitter();
    myEvent.subscribe(res => {
      this.customer = res;
      this.updateEvent.emit(this.customer);

      modal.dismiss();
    });

    const modal = await this.modalController.create({
      component: CustomerInputPage,
      componentProps:{
        id: this.customer.id,
        company: this.customer.company,
        contactFullName: this.customer.contactFullName,
        contactPosition: this.customer.contactPosition,
        contactPhone: this.customer.contactPhone,
        edit: editable,
        agregar: agregable,
        element: myEvent
      }
    });

    return await modal.present();
  }

}
