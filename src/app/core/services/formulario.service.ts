import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICadastro } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  private readonly apiUrl = environment.apiUrl;
  cadastroForm: FormGroup | null = null;

  constructor(private http: HttpClient) {}

  getCadastro() {
    return this.cadastroForm;
  }

  setCadastros(form: FormGroup) {
    this.cadastroForm = form;
  }
}
