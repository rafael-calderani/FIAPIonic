export interface INote {
  id?: string;
  nomeAluno: string;
  atividade: string;
  nota:number;
}

export class Note implements INote {
  id?: string;
  nomeAluno: string;
  atividade: string;
  nota:number;

  constructor (nomeAluno:string,atividade:string,nota:number) {
    this.nomeAluno = nomeAluno;
    this.atividade = atividade;
    this.nota = nota;
  }
}
