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

  constructor() {}

  calcularSuma() {
    this.suma = this.dado1 + this.dado2;
    // En php: $this->suma = $this->dado1 + $this->dado2
  }

}
