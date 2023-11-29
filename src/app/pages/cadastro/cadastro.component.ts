import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { ICadastro } from 'src/app/core/types/type';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  constructor(
    private service: FormularioService,
    private cadastroService: CadastroService
  ) {}

  ngOnInit(): void {}

  cadastrar() {
    const formCadastro = this.service.getCadastro();
    if (formCadastro?.valid) {
      const novoCadastro = formCadastro.getRawValue() as ICadastro;
      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next: (value) => {
          console.log(value);
        },
        error: (value) => {
          console.log(value);
        },
      });
    }
    console.log('Cadastro realizado com sucesso!');
  }
}
