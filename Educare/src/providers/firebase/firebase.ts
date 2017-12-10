import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


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
    this.alunoCollection = this.afs.collection('/alunos/', ref => {
      return ref.orderBy('nome'); // we could use where clause here as well =)
    });
    this.alunoList = this.alunoCollection.valueChanges();

    return this.alunoList;
  }

  addItemToCollection(collectionName, objItem) {
    this.afs.collection('/' + collectionName + '/').add(objItem);
  }

  deleteAluno(pathId) {
    this.afs.doc<Aluno>(pathId).delete();
  }

  updateAluno(alunoNovo) {
    this.alunoDoc.update(alunoNovo);
  }

}
