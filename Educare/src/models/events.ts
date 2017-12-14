export interface IEvents {
  id?: string;
  nome: string;
  local: string;
}

export class Events implements IEvents {
  id?: string;
  nome: string;
  local: string;

  constructor (nome: string, local: string) {
    this.nome = nome;
    this.local = local;
  }
}
