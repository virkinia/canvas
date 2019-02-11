import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { NavController } from "ionic-angular";
import * as Hammer from "hammerjs";

/**
 * Generated class for the CuadradoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "cuadrado",
  templateUrl: "cuadrado.html"
})
export class CuadradoComponent {
  @Input() title;
  @Output() seleccionado = new EventEmitter();
  @ViewChild("cuadrado") selectedItem: ElementRef;

  angle: Number;
  transformStyle: String;
  selected: boolean;

  constructor(public navCtrl: NavController) {
    // set default angle to 0deg
    this.angle = 0;
    this.transformStyle = "rotate(0deg)";
  }

  onRotation(event: any): void {
    console.log("rotation detected");
    this.angle = event.angle;
    this.transformStyle = "rotate(" + this.angle + "deg)";
  }

  /*   seleccionar(event) {
    console.log('Evento seleccionado', event);
    this.seleccionado.emit(this.selectedItem);
  }
 */
  seleccionar() {
    this.selected = true;
  }
  deseleccionar() {
    this.selected = false;
  }

  ngAfterViewInit(): void {
    const hammer = new Hammer(this.selectedItem.nativeElement);
    hammer.on("press", function(e) {
      // e.target.classList.toggle('expand');
      console.log("You're pressing " + this.title);
      console.log(e);
    });
  }
}
