import { Component, Input } from '@angular/core';
import { IPromocao } from 'src/app/core/types/type';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss'],
})
export class CardBuscaComponent {
  @Input() passagem: IPromocao = {
    destino: '',
    imagem: '',
    preco: 0,
  };
}
