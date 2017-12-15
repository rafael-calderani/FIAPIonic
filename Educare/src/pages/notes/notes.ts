import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import {  IAluno } from '../../models/aluno';
import { IActivity} from  '../../models/activity';
import {Note,INote} from '../../models/note' ;
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-note-list',
  templateUrl: 'notes.html',
})
export class NoteListPage {
  noteList: Observable<INote[]>;
  alunoList: Observable<IAluno[]>;
  atividadeList: Observable<IActivity[]>;
  noteNova: Note;
  nomeAluno: string;
  Atividade:string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
      this.noteList = this.firebaseProvider.getNote();
      this.alunoList = this.firebaseProvider.getAlunos();
      this.atividadeList = this.firebaseProvider.getActivity();
      this.noteNova =  new Note( "", "",0);
      this.nomeAluno = "";
      this.Atividade = "";
  }

   addItem() {
     this.noteNova.atividade = this.Atividade;
     this.noteNova.nomeAluno = this.nomeAluno;
     this.firebaseProvider.addNote(this.noteNova);
   }

   removeNota(id) {
    this.firebaseProvider.deleteNote(id);
   }
}
