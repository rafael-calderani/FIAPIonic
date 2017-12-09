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
    this.navCtrl.push(page);
  }
}
