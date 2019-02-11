import { Component, ViewChildren, QueryList } from "@angular/core";
import { NavController } from "ionic-angular";
import { CuadradoComponent } from "../../components/cuadrado/cuadrado";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  @ViewChildren(CuadradoComponent) componentes: QueryList<CuadradoComponent>;

  data = ["uno", "dos", "tres", "cuatro", "cinco"];
  seleccionado: CuadradoComponent = null;

  constructor(public navCtrl: NavController) {}

  onRotation(event) {
    this.componentes;
  }

  seleccionar(event, index) {
    if (this.seleccionado != null) {
      this.seleccionado.deseleccionar();
    }

    this.seleccionado = this.componentes.toArray()[index];
    this.seleccionado.title = "seleccionado";
    this.seleccionado.seleccionar();
  }
}
