import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Aluno, IAluno } from '../../models/aluno';
import { AlunoDetailPage } from '../../pages/aluno-detail/aluno-detail';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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
  alunoList: Observable<IAluno[]>;
  alunoNovo: Aluno;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
      this.alunoList = this.firebaseProvider.getAlunos();
      this.alunoNovo =  new Aluno("", "", new Date(), "");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlunoListPage');
  }

  addItem() {
    this.firebaseProvider.addItemToCollection("alunos", this.alunoNovo);
  }

  updateAluno(aluno) {
    this.navCtrl.push(AlunoDetailPage, {aluno: aluno});
  }

  removeAluno(id) {
    this.firebaseProvider.deleteAluno(id);
  }
}
