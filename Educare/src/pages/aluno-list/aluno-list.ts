import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';

/**
 * Generated class for the AlunoListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aluno-list',
  templateUrl: 'aluno-list.html',
})
export class AlunoListPage {
  alunoList: FirebaseListObservable<any[]>;
  alunoNovo = '';

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
      this.alunoList = this.firebaseProvider.getCollection("alunos");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlunoListPage');
  }

  addItem() {
    this.firebaseProvider.addItemToCollection("alunos", this.alunoNovo);
  }

  removeItem(id) {
    this.firebaseProvider.removeItemById("alunos", id);
  }

}
