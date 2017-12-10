interface IAluno {
  id?: number;
  nome: string;
  oQueVaiSerQuandoCrescer: string;
  dataNascimento: Date;
  observacoes: string;
  criadoEm: Date;
  modificadoEm: Date;
}

class Aluno implements IAluno {
  id?: number;
  nome: string;
  oQueVaiSerQuandoCrescer: string;
  dataNascimento: Date;
  observacoes: string;
  criadoEm: Date;
  modificadoEm: Date;

  constructor (nome: string, oQueVaiSerQuandoCrescer: string,
    dataNascimento: Date, observacoes: string,
    criadoEm?: Date, modificadoEm?: Date) {
    this.nome = nome;
    this.oQueVaiSerQuandoCrescer = oQueVaiSerQuandoCrescer;
    this.dataNascimento = dataNascimento;
    this.observacoes = observacoes;
    this.criadoEm = (criadoEm == null) ? new Date() : criadoEm;
    this.modificadoEm = (modificadoEm == null) ? this.criadoEm : modificadoEm;
  }
}
