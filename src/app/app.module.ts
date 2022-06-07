import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DatosIntroducidosComponent } from './datos-introducidos/datos-introducidos.component';

@NgModule({
  declarations: [AppComponent, FormularioComponent, DatosIntroducidosComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
