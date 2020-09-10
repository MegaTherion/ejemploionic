import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  dado1 = 0;
  dado2 = 0;
  suma = 0;
  eleccion = '';
  resultado = '';

  constructor() {}

  calcularSuma() {

    this.dado1 = Math.floor(Math.random() * 6) + 1;
    this.dado2 = Math.floor(Math.random() * 6) + 1;

    this.suma = this.dado1 + this.dado2;
    if (this.suma >= 2 && this.suma <= 6) {
      this.resultado = 'menor';
    }
    else if (this.suma > 7) {
      this.resultado = 'mayor';
    }
    else if (this.suma === 7) {
      this.resultado = 'casa';
    }
    // En php: $this->suma = $this->dado1 + $this->dado2
  }

  elegirOpcion(opcion: string) {
    this.eleccion = opcion;
  }

}
