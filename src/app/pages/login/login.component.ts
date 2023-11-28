import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      pass: [
        null,
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
    });
  }

  submit() {
    const email = this.formulario.value.email;
    const pass = this.formulario.value.pass;

    this.authService.autenticar(email, pass).subscribe({
      next: (res) => {
        console.log('Logado!', res);
        this.router.navigateByUrl('/');
      },
      error: (error) => {
        console.log('Erro login', error);
      },
    });
  }
}
