import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Aluno, IAluno } from '../../models/aluno';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-aluno-detail',
  templateUrl: 'aluno-detail.html',
})
export class AlunoDetailPage {
  alunoUpdate: Aluno;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public firebaseProvider: FirebaseProvider) {
      this.alunoUpdate = navParams.get("aluno");
  }
  
  update(){
    this.firebaseProvider.updateAluno(this.alunoUpdate);
  }

}
