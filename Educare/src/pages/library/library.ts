import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Library, ILibrary} from '../../models/library';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {
  libraryList: Observable<ILibrary[]>;
  libraryNova: Library;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public firebaseProvider: FirebaseProvider) {
    this.libraryList = this.firebaseProvider.getLibrary();
    this.libraryNova =  new Library("", "");
}

 addItem() {
   this.firebaseProvider.addLibrary(this.libraryNova);
 }

 removeEvent(id) {
   this.firebaseProvider.deleteLibrary(id);
 }
}
