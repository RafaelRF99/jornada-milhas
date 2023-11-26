import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  adulto: number = 1;
  crianca: number = 1;
  bebe: number = 1;

  addAdulto() {
    this.adulto = this.adulto + 1;
  }

  subAdulto() {
    this.adulto = this.adulto - 1;
  }

  addCrianca() {
    this.crianca = this.crianca + 1;
  }

  subCrianca() {
    this.crianca = this.crianca - 1;
  }

  addBebe() {
    this.bebe = this.bebe + 1;
  }

  subBebe() {
    this.bebe = this.bebe - 1;
  }
}
