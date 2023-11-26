import { Component, Input, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { IPromocao } from 'src/app/core/types/type';

@Component({
  selector: 'app-promocao',
  templateUrl: './promocao.component.html',
  styleUrls: ['./promocao.component.scss'],
})
export class PromocaoComponent implements OnInit {
  promocao: IPromocao[] = [];

  constructor(private service: PromocaoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((res) => {
      this.promocao = res;
    });
  }
}
