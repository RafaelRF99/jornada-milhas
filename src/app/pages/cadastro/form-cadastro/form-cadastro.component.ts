import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { ICadastro, IUnidadeFederativa } from 'src/app/core/types/type';
import { FormValidation } from './form.validation';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss'],
})
export class FormCadastroComponent {
  formulario!: FormGroup;
  @Output() acaoClique: EventEmitter<ICadastro> = new EventEmitter<ICadastro>();

  estadoControl = new FormControl<IUnidadeFederativa | null>(
    null,
    Validators.required
  );

  constructor(
    private formBuilder: FormBuilder,
    public formBuscaService: FormBuscaService,
    private formularioService: FormularioService
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [
        null,
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
      nascimento: [null, Validators.required],
      genero: [null, Validators.required],
      cpf: [
        null,
        Validators.compose([Validators.required, Validators.minLength(11)]),
      ],
      telefone: [null, Validators.compose([Validators.required])],
      cidade: [
        null,
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      estado: this.estadoControl,
      email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      emailCheck: [
        null,
        Validators.compose([
          Validators.required,
          Validators.email,
          FormValidation.equalTo('email'),
        ]),
      ],
      senha: [
        null,
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
      senhaCheck: [
        null,
        Validators.compose([
          Validators.required,
          FormValidation.equalTo('senha'),
        ]),
      ],
      terms: [
        null,
        Validators.compose([Validators.required, Validators.requiredTrue]),
      ],
    });

    this.formularioService.setCadastros(this.formulario);
  }

  submit() {
    this.acaoClique.emit();
  }
}
