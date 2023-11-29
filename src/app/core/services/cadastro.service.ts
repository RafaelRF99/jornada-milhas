import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICadastro } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  cadastrar(pessoa: ICadastro): Observable<ICadastro> {
    return this.http.post<ICadastro>(`${this.apiUrl}/auth/cadastro`, pessoa);
  }
}
