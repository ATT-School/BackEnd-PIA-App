import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ProductModels} from 'src/app/models/product-models';
import { ProductInputPage } from 'src/app/pages/product-input/product-input.page';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit {

  @Input() product: ProductModels.IProduct;

  @Output() deleteEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();

  editing: boolean = false;

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  delete(id: number) {
    this.deleteEvent.emit(id);
  }

  update(id: number) {
    this.abrirModal(true, false);
    //this.updateEvent.emit(id);
  }

  toggleEditing() {
    this.editing = !this.editing;
  }

  async abrirModal(editable: boolean, agregable: boolean) {
    let myEvent = new EventEmitter();
    myEvent.subscribe(res => {
      this.product = res;
      this.updateEvent.emit(this.product);

      modal.dismiss();
    });

    const modal = await this.modalController.create({
      component: ProductInputPage,
      componentProps:{
        id: this.product.id,
        name: this.product.name,
        price: this.product.price,
        discontinued: this.product.isDiscontinued,
        edit: editable,
        agregar: agregable,
        element: myEvent
      }
    });

    return await modal.present();
  }

}
