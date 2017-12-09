import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
  constructor(public afd: AngularFireDatabase) { }
  /*
    Collections: alunos, atividades, biblioteca, eventos, anotaçoes
  */

  getCollection(name) {
    return this.afd.list('/' + name + '/');
  }

  addItemToCollection(collectionName, objItem) {
    this.afd.list('/' + collectionName + '/').push(objItem);
  }

  removeItemById(collectionName, id) {
    this.afd.list('/' + collectionName + '/').remove(id);
  }

}
