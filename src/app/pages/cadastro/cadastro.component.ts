import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

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
      estado: [
        null,
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      emailCheck: [null],
      senha: [
        null,
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
      senhaCheck: [null],
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
