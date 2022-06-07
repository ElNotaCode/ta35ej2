import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  nombre: string = '';
  email: string = '';
  mensaje: string = '';
  validacion: string = '';

  @Output() enviarArrayFormulario = new EventEmitter<any>();

  enviarFormulario() {
    //comprueba todos los campos
    if (this.comprobarFormulario()) {
      //aray temporal
      let array = [this.nombre, this.email, this.mensaje];
      //envia
      this.enviarArrayFormulario.emit(array);
    }
  }

  comprobarFormulario() {
    let aviso = true;

    if (this.nombre.length < 4) {
      aviso = false;
    } else if (!this.email.includes('@')) {
      aviso = false;
    } else if (this.mensaje.length < 1) {
      aviso = false;
    } else if (this.validacion != '5') {
      aviso = false;
    }

    if (aviso) {
      return true;
    } else {
      return false;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
