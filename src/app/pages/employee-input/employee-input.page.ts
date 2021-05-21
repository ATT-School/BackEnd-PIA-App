import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import EmployeeModels from 'src/app/Models/employee-models';

@Component({
  selector: 'app-employee-input',
  templateUrl: './employee-input.page.html',
  styleUrls: ['./employee-input.page.scss'],
})
export class EmployeeInputPage implements OnInit {
@Input() id: number;
@Input() name: string;
@Input() familyName: string;
@Input() homeAddress: string;
@Input() edit: boolean;
@Input() agregar: boolean;

@Output() element = new EventEmitter();

employee: EmployeeModels.IEmployee;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalController.dismiss();
  }

  updateElement(){
    this.employee = {
      id: this.id,
      name: this.name, 
      familyName: this.familyName,
      homeAddress: this.homeAddress
    }

    if(this.agregar) {
      let newEmployee: EmployeeModels.IEmployeePost = {
        name: this.name, 
        familyName: this.familyName,
        homeAddress: this.homeAddress
      }

      this.element.emit(newEmployee);
    }
    else {
      this.element.emit(this.employee);
    }
  }

}
