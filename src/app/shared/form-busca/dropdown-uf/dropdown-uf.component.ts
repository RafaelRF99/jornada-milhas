import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa.service';
import { IUnidadeFederativa } from 'src/app/core/types/type';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss'],
})
export class DropdownUfComponent implements OnInit {
  @Input() label!: string;
  @Input() iconePrefixo!: string;
  @Input() control!: FormControl;

  unidadeFederativa!: IUnidadeFederativa[];

  filteredOptions$?: Observable<IUnidadeFederativa[]>;

  constructor(private unidadeFederativaService: UnidadeFederativaService) {}

  ngOnInit(): void {
    this.unidadeFederativaService.listar().subscribe((dados) => {
      this.unidadeFederativa = dados;
    });
    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this.filtrarUfs(value))
    );
  }

  filtrarUfs(value: string | IUnidadeFederativa): IUnidadeFederativa[] {
    const nameUf = typeof value === 'string' ? value : value?.nome;
    if (!this.unidadeFederativa) {
      return [];
    }
    const valorFiltrado = nameUf?.toLowerCase();
    const result = this.unidadeFederativa.filter((estado) =>
      estado.nome.toLowerCase().includes(valorFiltrado)
    );
    return result;
  }

  displayFn(estado: IUnidadeFederativa): string {
    return estado && estado.nome ? estado.nome : '';
  }
}
