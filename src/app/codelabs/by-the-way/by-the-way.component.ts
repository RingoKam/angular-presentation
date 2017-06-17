import { Component, OnInit } from '@angular/core';
import { displayAngularComponent, displayAngularComponentWithHtml } from '../../exercise/helpers/helpers';

@Component({
  selector: 'slides-by-the-way',
  templateUrl: './by-the-way.component.html',
  styleUrls: ['./by-the-way.component.css']
})
export class ByTheWayComponent {

  public code = {
    ngif: {
      template: {
        ngif: ``
      }
    }
  };

  constructor() {
  }
}
