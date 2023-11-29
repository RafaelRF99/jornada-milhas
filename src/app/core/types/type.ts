export interface IPromocao {
  id?: number;
  destino: string;
  imagem: string;
  preco: number;
}

export interface IUnidadeFederativa {
  id: number;
  nome: string;
  sigla: string;
}

export interface IEstado {
  id: number;
  nome: string;
  sigla: string;
}

export interface ICadastro {
  nome: string;
  nascimento: Date;
  cpf: string;
  telefone: string;
  email: string;
  senha: string;
  genero: string;
  cidade: string;
  estado: IEstado;
}
