import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ta35ej2';

  arrayFormulario: any = [];

  recibirDatosFormulario($event: any) {
    this.arrayFormulario = $event;
  }
}
