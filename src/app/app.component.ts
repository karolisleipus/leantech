import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAcQcGXFND0T_nmAdTrxO9pdqCeJlQusOs",
      authDomain: "leantech-fa70a.firebaseapp.com",
      databaseURL: "https://leantech-fa70a.firebaseio.com",
      projectId: "leantech-fa70a",
      storageBucket: "leantech-fa70a.appspot.com",
      messagingSenderId: "263031869570"
    })
  }
}
