import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  dato = '';
  v: Array<string> = new Array<string>(5);
  entrada: number;
  salida: number;
  mensaje = '';

  constructor() {
    this.entrada = -1;
    this.salida = -1;
  }

  vacia(): boolean {
    return (this.entrada === -1 && this.salida === -1);
  }

  llena(): boolean {
    return (this.entrada === 4);
  }

  insertar(dato: string) {
    if (this.vacia()) {
      this.entrada = this.salida = 0;
      this.v[this.entrada] = dato;
      this.dato = '';
    } else {
      if (!this.llena()) {
        this.entrada++;
        this.v[this.entrada] = dato;
        this.dato = '';
      } else {
        console.log('cola llena');
        this.mensaje = 'Cola llena';
      }
    }
  }

  extraer() {
    if (this.vacia()) {
      console.log('cola vacia');
      this.mensaje = 'Cola vacia';
      return;
    }
    console.log(this.v[this.salida]);
    this.mensaje = 'Valor extraído: ' + this.v[this.salida];
    this.v[this.salida] = '';
    if (this.entrada === this.salida) {
      this.entrada = this.salida = -1;
    } else {
      this.salida++;
    }
  }

  ver() {
    console.log(this.v);
  }

}
