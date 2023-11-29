import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss'],
})
export class FormCadastroComponent {
  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public formBuscaService: FormBuscaService
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      name: [
        null,
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
      nascimento: [null, Validators.required],
      sexo: [null, Validators.required],
      cpf: [
        null,
        Validators.compose([Validators.required, Validators.minLength(11)]),
      ],
      telefone: [null, Validators.compose([Validators.required])],
      cidade: [
        null,
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      emailCheck: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      senha: [
        null,
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
      senhaCheck: [null, Validators.compose([Validators.required])],
      terms: [
        null,
        Validators.compose([Validators.required, Validators.requiredTrue]),
      ],
    });
  }

  submit() {
    console.log(this.formulario.value);
  }
}
