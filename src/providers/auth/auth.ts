import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';


import { environment } from '../../environments/environments';
import { Storage } from '@ionic/storage';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  loggedIn = new BehaviorSubject<boolean>(false);

  constructor(public http: HttpClient, public storage: Storage) {
  }

  get isLoggedIn() {
    if (this.loggedIn) {
      let userLogged = this.storage.get('userLogged');
      if(userLogged) {
        this.loggedIn.next(true);
      }
    }
    return this.loggedIn.asObservable();
  }

  login(username, password) {
    let userCredentials = {
      username: username,
      password: password
    }
    let backEndRoute = environment.URL_BACKEND_PROD + 'login';
    return this.http.post(backEndRoute, userCredentials);
  }

}
