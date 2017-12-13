export interface IActivity {
  id?: string;
  nome: string;
  status: string;
  detalhes: string;
  criadoEm: Date;
  modificadoEm: Date;
}

export class Activity implements IActivity {
  id?: string;
  nome: string;
  status: string;
  detalhes: string;
  criadoEm: Date;
  modificadoEm: Date;

  constructor (nome: string, status: string,
    detalhes: string,
    criadoEm?: Date, modificadoEm?: Date) {
    this.nome = nome;
    this.status = status;
    this.detalhes = detalhes;
    this.criadoEm = (criadoEm == null) ? new Date() : criadoEm;
    this.modificadoEm = (modificadoEm == null) ? this.criadoEm : modificadoEm;
  }
}
