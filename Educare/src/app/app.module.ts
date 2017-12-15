import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ActivityListPage } from '../pages/activity-list/activity-list';
import { AlunoListPage } from '../pages/aluno-list/aluno-list';
import { AlunoDetailPage } from '../pages/aluno-detail/aluno-detail';
import { EventListPage } from '../pages/event-list/event-list';
import { LibraryPage } from '../pages/library/library';
import { NoteListPage } from '../pages/notes/notes';

import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule  } from 'angularfire2/firestore';
import { FirebaseProvider } from '../providers/firebase/firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBiRDOlvc6K2YsuBqR6T8GDxfr1_CGxcuo",
    authDomain: "fiapeducare.firebaseapp.com",
    databaseURL: "https://fiapeducare.firebaseio.com",
    projectId: "fiapeducare",
    storageBucket: "",
    messagingSenderId: "191961180297"
  };

@NgModule({
  declarations: [
    MyApp, HomePage, ActivityListPage, AlunoListPage, AlunoDetailPage,
    EventListPage, LibraryPage, NoteListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, HomePage, ActivityListPage, AlunoListPage, AlunoDetailPage,
    EventListPage, LibraryPage, NoteListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
