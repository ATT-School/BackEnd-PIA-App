import { Component, EventEmitter, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IResponse } from 'src/app/Models/api-response-model';
import { ProductModels } from 'src/app/models/product-models';
import { HelpInfoPage } from 'src/app/pages/help-info/help-info.page';
import { ProductInputPage } from 'src/app/pages/product-input/product-input.page';
import { HttpProviderService } from 'src/app/Services/http-provider/http-provider.service';

@Component({
  selector: 'app-product-tab',
  templateUrl: './product-tab.page.html',
  styleUrls: ['./product-tab.page.scss'],
})
export class ProductTabPage implements OnInit {

  name = "Product";
  iconAdd = "add"

  // API Response values
  products: ProductModels.IProduct[] = []
  nextPage?: number = null;
  currentPage?: number = null;
  previousPage?: number = null;

  // Navigation helpers
  loaded: boolean = false;
  error: boolean = false;
  loading: boolean = false;
  addingElement: boolean = false;

  constructor(private http: HttpProviderService, public modalController: ModalController) { }

  ngOnInit() {
    this.getPage(1);
  }

  //////////////////////////////////

  // NOTA: Cambiar los alerts por algún cuadro de diálogo que salga por unos segundos y se vuelva a ocultar
  // pero que el usuario no tenga que quitar manualmente.

  //////////////////////////////////


  // HTTP REQUESTS //

  getPage(page: number) {
    this.loading = true;

    this.http.getRequest<IResponse<ProductModels.IProduct>>(this.name, `pages/${page}`)
      .subscribe(
        (data) => {
          // Load info from the response.
          this.nextPage = data.nextPage;
          this.currentPage = data.currentPage;
          this.previousPage = data.previousPage;
          this.products = data.responseList;

          // Check if the response list is not empty.
          this.loaded = this.products.length > 0 ? true : false;

          // The API responded succesfully
          this.error = false;
        },
        (error) => {
          // Reset values
          this.nextPage = null;
          this.currentPage = null;
          this.previousPage = null;

          this.error = true;
          this.loaded = false;
        }
      )
      .add(() => {
        this.loading = false;
      });
  }


  addElement(employee: ProductModels.IProductPost) {
    this.addingElement = true;

    // Esta información viene de un forms.
    /*
    let employee: EmployeeModels.IEmployeePost = {
      homeAddress: "Una casa",
      name: "Un nombre",
      familyName: "Un apellido"
    }
    */

    this.http.postRequest(this.name, employee)
      .subscribe(
        (data) => {
          this.emitAlert("Add",`Successfully Added with id ${data}!`);
          // If we are in the last page, reload to show the "Next Page" button.
          if (!this.nextPage)
            this.reloadCurrentPage();
        },
        (err) => {
          if (err.status == 409 || err.status == 400)
          this.emitAlert("Add", "One or more fields in the provided information infringe a constraint on the Data Base. Failed to Add.");
          else
            this.emitAlert("Add", "An unexpected error ocurred while adding the record.");
        }
      )
      .add(
        () => { this.addingElement = false; }
      );
  }


  updateElement($event) {
    let employee: ProductModels.IProduct = $event;
    // Esta información vendría del formulario
    /*
    let employee: EmployeeModels.IEmployeePut = {
      homeAddress: "Casita 2",
      name: "Nombre 2",
      familyName: "Apellido 2"
    }
    */

    this.http.putRequest(this.name, employee.id.toString(), employee)
      .subscribe(
        (data) => {
          this.emitAlert("Update", "Successfully Modified!");
        },
        (err) => {
          if (err.status == 409 || err.status == 400)
            this.emitAlert("Update", "One or more fields in the modified information infringee a constraint on the Data Base.\nFailed to Modify.");
          else
            this.emitAlert("Update", "An unexpected error ocurred while updating the data.");
        }
      )
      .add(() => {
        // Reload the page to show the changes.
        this.reloadCurrentPage();
      });;
  }


  deleteElement($event) {
    let id = $event;

    this.http.deleteRequest(this.name, `${id}`)
      .subscribe(
        (data) => {
          // If the deleated employee is the las employee of the page.
          if (this.products.length == 1) {
            // If there is a previous page, go back.
            if (this.previousPage)
              this.getPreviousPage();

            // If there is not a previous page, but there is a next page, go next.
            else if (this.nextPage)
              this.getNextPage();

            // Otherwise, there are no more elements to show
            else {
              this.nextPage = null;
              this.currentPage = null;
              this.previousPage = null;

              this.loaded = false;
            }
          }

          // Otherwise, reload the page to show the changes.
          else
            this.reloadCurrentPage();
        },
        (err) => {
          if (err.status == 409 || err.status == 400)
            this.emitAlert("Delete", "Cannot delete this element because it infringes a Constraint.");
          else
            this.emitAlert("Delete", "An unexpected error ocurred while deleting the record.");
        }
      );
  }


  // NAVIGATION //
  reloadCurrentPage() {
    this.getPage(this.currentPage);
  }

  getPreviousPage() {
    this.getPage(this.previousPage);
  }

  getNextPage() {
    this.getPage(this.nextPage);
  }

  async abrirModal(editable: boolean, agregable: boolean) {
    let myEvent = new EventEmitter();
    myEvent.subscribe(res => {;
      modal.dismiss();

      this.addElement(res);
    });

    const modal = await this.modalController.create({
      component: ProductInputPage,
      componentProps: {
        id: 0,
        name: "",
        price: "",
        discontinued: false,
        edit: editable,
        agregar: agregable,
        element: myEvent
      }
    });
    return await modal.present();
  }

  async emitAlert(header: string, message: string) {
    const alert = document.createElement('ion-alert');
    alert.header = header + " Product";
    alert.message = message;
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    await alert.present();

    const { role } = await alert.onDidDismiss();
    //console.log('onDidDismiss resolved with role', role);
  }

  async abrirAyuda() {
    const modal = await this.modalController.create({
      component: HelpInfoPage,
    });
    return await modal.present();
  }

}
