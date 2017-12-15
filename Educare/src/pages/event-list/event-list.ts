import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Events, IEvents} from '../../models/events';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html',
})
export class EventListPage {
  eventList: Observable<IEvents[]>;
  eventNova: Events;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
      this.eventList = this.firebaseProvider.getEvent();
      this.eventNova =  new Events("", "");
  }

   addItem() {
     this.firebaseProvider.addEvent(this.eventNova);
   }

   removeEvent(id) {
     this.firebaseProvider.deleteEvent(id);
   }
}
