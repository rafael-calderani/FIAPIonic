import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Aluno, IAluno } from '../../models/aluno';


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
  alunoCollection: AngularFirestoreCollection<IAluno>;
  alunoDoc: AngularFirestoreDocument<IAluno>;
  alunoList: Observable<IAluno[]>;

  constructor(public afs: AngularFirestore) { }
  /*
    Collections: alunos, atividades, biblioteca, eventos, anotaçoes
  */

  getAlunos() {
    this.alunoCollection = this.afs.collection('alunos'); /*, ref => {
      return ref.orderBy('nome'); // we could use where clause here as well =)
    } */
    this.alunoList = this.alunoCollection.valueChanges();
    this.alunoCollection.ref

    return this.alunoList;
  }

  addItemToCollection(collectionName, objItem: Aluno) {
    var timeStamp = new Date();
    this.afs.collection('alunos').doc(timeStamp.toString()).set( {
      id: timeStamp.toString(),
      nome: objItem.nome,
      oQueVaiSerQuandoCrescer: objItem.oQueVaiSerQuandoCrescer,
      dataNascimento: objItem.dataNascimento,
      observacoes: objItem.observacoes,
      criadoEm: new Date(),
      modificadoEm: new Date()
    });
  }

  deleteAluno(pathId) {
    this.afs.collection('alunos').doc(pathId).delete();
  }

  updateAluno(alunoNovo) {
    this.afs.collection('alunos').doc(alunoNovo.id).update( {
      nome: alunoNovo.nome,
      oQueVaiSerQuandoCrescer: alunoNovo.oQueVaiSerQuandoCrescer,
      dataNascimento: alunoNovo.dataNascimento,
      observacoes: alunoNovo.observacoes,
      modificadoEm: new Date()
    });
  }

}
