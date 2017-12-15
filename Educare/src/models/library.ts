export interface ILibrary {
  id?: string;
  nome: string;
  link: string;
  criadoEm: Date;
}

export class Library implements ILibrary {
  id?: string;
  nome: string;
  link: string;
  criadoEm: Date;

  constructor (nome: string, link: string) {
    this.nome = nome;
    this.link = link;
    this.criadoEm = new Date();
  }
}
