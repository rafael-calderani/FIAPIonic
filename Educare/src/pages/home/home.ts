import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ActivityListPage } from '../activity-list/activity-list';
import { AlunoListPage } from '../aluno-list/aluno-list';
import { EventListPage } from '../event-list/event-list';
import { LibraryPage } from '../library/library';
import { NotesPage } from '../notes/notes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  navegar(page) {
    switch(page) {
      case 'aluno':
        this.navCtrl.push(AlunoListPage);
        break;
      case 'atividade':
        this.navCtrl.push(ActivityListPage);
        break;
      case 'evento':
        this.navCtrl.push(EventListPage);
        break;
      case 'biblioteca':
        this.navCtrl.push(LibraryPage);
        break;
      case 'notes':
        this.navCtrl.push(NotesPage);
        break;
    }
  }
}
