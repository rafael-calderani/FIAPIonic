import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Activity, IActivity } from '../../models/activity';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-activity-list',
  templateUrl: 'activity-list.html',
})
export class ActivityListPage {
  activityList: Observable<IActivity[]>;
  activityNova: Activity;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
      this.activityList = this.firebaseProvider.getActivity();
      this.activityNova =  new Activity("", "","", new Date(), new Date());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityListPage');
  }

   addItem() {
     this.firebaseProvider.addItemToCollectionActivity("atividades", this.activityNova);
   }


   removeActivity(id) {
     this.firebaseProvider.deleteActivity(id);
   }
}
