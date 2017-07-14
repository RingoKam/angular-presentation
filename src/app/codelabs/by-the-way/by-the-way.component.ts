import { Component, OnInit, Input, NgModule } from '@angular/core';
import { displayAngularComponent, displayAngularComponentWithHtml } from '../../exercise/helpers/helpers';

@Component({
  selector: 'slides-by-the-way',
  templateUrl: './by-the-way.component.html',
  styleUrls: ['./by-the-way.component.css']
})
export class ByTheWayComponent {
  @Input() testing: string;

  public config = {
    ngif: {
      template: {
        code: `
import { Component, NgModule, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'my-app',
  template: \`
    <div>
      <h2>Angular ngIf Example</h2>
      <input type='checkbox' [(ngModel)]='ShowHelloWorld' /> Check here!
      <h1 *ngIf='ShowHelloWorld'>Hello World</h1>
    </div>
  \`,
})
export class App {
}

@NgModule({
  imports: [ BrowserModule, FormsModule],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}
`,
      path: 'app.module.ts',
      type: 'typescript'
      }
    }
  };

  constructor() {
  }
}
