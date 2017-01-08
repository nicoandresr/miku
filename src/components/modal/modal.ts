import { Component } from '@angular/core';

/*
  Generated class for the Modal component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'modal',
  templateUrl: 'modal.html'
})
export class ModalComponent {

  text: string;

  constructor() {
    console.log('Hello Modal Component');
    this.text = 'Hello World';
  }

}
