import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

/**
 * Generated class for the DirectivesRotateCustomDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[rotateCustom]' // Attribute selector
})
export class RotateCustomDirective {
  @Output() angleChange = new EventEmitter<any>();
  auxRotate = 0;

  //although rotatestart is not required here, but we are keeping it here for reference purpose

  @HostListener('rotatestart', ['$event']) protected onRotateStart(event) {
    event.preventDefault();
    console.log('Rotate Start');
    console.log(event);
    this.angleChange.emit({ angle: this.auxRotate });
  }

  @HostListener('rotatemove', ['$event']) protected onRotateMove(event) {
    event.preventDefault();
    console.log('Rotate Move');
    console.log(event);
    this.angleChange.emit({ angle: event.rotation });
  }

  @HostListener('rotateend', ['$event']) protected onRotateEnd(event) {
    event.preventDefault();
    console.log('Rotate End');
    console.log(event);
    this.auxRotate = event.angle;
  }

  constructor() {
    console.log('Hello DirectivesRotateCustomDirective Directive');
  }
}
