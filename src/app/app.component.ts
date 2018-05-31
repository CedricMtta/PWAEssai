import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './services/auth.service';

import { FcmPushService } from './services/fcm-push/fcm-push.service';
import { FirebaseAuthService } from './services/firebase-auth/firebase-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Progressive Web Cat';

  isAuth: boolean;

  constructor(private authService: AuthService) {
    const config = {
      apiKey: "AIzaSyDEYPKocIK4_hGgFrO4MWnpDpn3VzLuZHw",
      authDomain: "pwa-m2gi.firebaseapp.com",
      databaseURL: "https://pwa-m2gi.firebaseio.com",
      projectId: "pwa-m2gi",
      storageBucket: "",
      messagingSenderId: "714866598993"
    };
    firebase.initializeApp(config);
  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  onSignOut() {
    this.authService.signOutUser();
  }
}
