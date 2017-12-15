import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Aluno, IAluno } from '../../models/aluno';
import { Activity, IActivity } from '../../models/activity';
import { Events, IEvents } from '../../models/events';
import { Note, INote } from '../../models/note';
import { Library, ILibrary} from '../../models/library';

@Injectable()
export class FirebaseProvider {
  alunoCollection: AngularFirestoreCollection<IAluno>;
  alunoList: Observable<IAluno[]>;

  activityCollection: AngularFirestoreCollection<IActivity>;
  activityList: Observable<IActivity[]>;

  eventCollection: AngularFirestoreCollection<IEvents>;
  eventList: Observable<IEvents[]>;

  noteCollection: AngularFirestoreCollection<INote>;
  noteList: Observable<INote[]>;

  libraryCollection: AngularFirestoreCollection<ILibrary>;
  libraryList: Observable<ILibrary[]>;

  constructor(public afs: AngularFirestore) { }

  getAlunos() {
    this.alunoCollection = this.afs.collection('alunos'); /*, ref => {
      return ref.orderBy('nome'); // we could use where clause here as well =)
    } */
    this.alunoList = this.alunoCollection.valueChanges();
    //this.alunoCollection.ref

    return this.alunoList;
  }

  getActivity(){
    this.activityCollection = this.afs.collection('atividades');
    this.activityList = this.activityCollection.valueChanges();
    //this.activityCollection.ref

    return this.activityList;
  }

  getEvent(){
    this.eventCollection = this.afs.collection('eventos');
    this.eventList = this.eventCollection.valueChanges();

    return this.eventList;

  }

  getNote(){
    this.noteCollection = this.afs.collection('avaliacoes');
    this.noteList = this.noteCollection.valueChanges();

    return this.noteList;
  }

  getLibrary(){
    this.libraryCollection = this.afs.collection('biblioteca');
    this.libraryList = this.libraryCollection.valueChanges();

    return this.libraryList;
  }

  addAluno(objItem: Aluno) {
    var timeStamp = new Date();
    this.afs.collection('alunos').doc(timeStamp.toString()).set( {
      id: timeStamp.toString(),
      nome: objItem.nome,
      oQueVaiSerQuandoCrescer: objItem.oQueVaiSerQuandoCrescer,
      dataNascimento: objItem.dataNascimento,
      observacoes: objItem.observacoes,
      criadoEm: objItem.criadoEm,
      modificadoEm: objItem.modificadoEm
    });
  }

 addActivity(objItem: Activity) {
   var timeStamp = new Date();
   this.afs.collection('atividades').doc(timeStamp.toString()).set( {
     id: timeStamp.toString(),
     nome: objItem.nome,
     status: objItem.status,
     detalhes: objItem.detalhes,
     criadoEm: objItem.criadoEm,
     modificadoEm: objItem.modificadoEm
   });
 }

 addEvent(objItem: Events) {
   var timeStamp = new Date();
   this.afs.collection('eventos').doc(timeStamp.toString()).set( {
     id: timeStamp.toString(),
     nome: objItem.nome,
     local: objItem.local
   });
 }

 addNote(objItem: Note){
   var timeStamp = new Date();
   this.afs.collection('avaliacoes').doc(timeStamp.toString()).set( {
     id: timeStamp.toString(),
     nomeAluno: objItem.nomeAluno,
     Atividade: objItem.atividade,
     nota: objItem.nota
   });
 }

 addLibrary(objItem: Library){
   var timeStamp = new Date();
   this.afs.collection('biblioteca').doc(timeStamp.toString()).set( {
     id: timeStamp.toString(),
     nome: objItem.nome,
     link: objItem.link,
     criadoEm: objItem.criadoEm
   });
 }


  deleteAluno(pathId) {
    this.afs.collection('alunos').doc(pathId).delete();
  }

  deleteActivity(pathId){
    this.afs.collection('atividades').doc(pathId).delete();
  }

  deleteEvent(pathId){
    this.afs.collection('eventos').doc(pathId).delete();
  }
  deleteNote(pathId){
    this.afs.collection('avaliacoes').doc(pathId).delete();
  }
  deleteLibrary(pathId){
    this.afs.collection('biblioteca').doc(pathId).delete();
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
