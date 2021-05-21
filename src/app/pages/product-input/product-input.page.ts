import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import ProductModels from 'src/app/models/product-models';

@Component({
  selector: 'app-product-input',
  templateUrl: './product-input.page.html',
  styleUrls: ['./product-input.page.scss'],
})
export class ProductInputPage implements OnInit {

  @Input() id: number;
  @Input() name: string;
  @Input() price: number;
  @Input() discontinued: boolean;
  @Input() edit: boolean;
  @Input() agregar: boolean;

  @Output() element = new EventEmitter();

  product: ProductModels.IProduct;
  descontinuado: string;
  
    constructor(private modalController: ModalController) { }
  
    ngOnInit() {
      if(this.discontinued){
        this.descontinuado = "true"
      }else{
        this.descontinuado = "false";
      }
    }
  
    salir(){
      this.modalController.dismiss();
    }

    descontinuar(){
      if(this.descontinuado == "true"){
        this.discontinued =  true;
      }else{
        this.discontinued = false;
      }
    }

    updateElement(){
     
      this.product = {
        id: this.id,
        name: this.name, 
        price: this.price,
        isDiscontinued: this.discontinued
      }
  
      if(this.agregar) {
        let newEmployee: ProductModels.IProductPost = {
          name: this.name, 
          price: this.price,
          isDiscontinued: this.discontinued
        }
  
        this.element.emit(newEmployee);
      }
      else {
        this.element.emit(this.product);
      }
    }
  
}
