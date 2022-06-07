import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-introducidos',
  templateUrl: './datos-introducidos.component.html',
  styleUrls: ['./datos-introducidos.component.css'],
})
export class DatosIntroducidosComponent implements OnInit {
  @Input() arrayFormulario: any = [];

  constructor() {}

  ngOnInit(): void {}
}
