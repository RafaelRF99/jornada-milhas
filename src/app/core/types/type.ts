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
