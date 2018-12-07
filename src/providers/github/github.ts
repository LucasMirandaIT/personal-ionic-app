import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GithubProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubProvider {

  constructor(public http: HttpClient) {
  }

  loadRepos() {
    let url = '';
    return this.http.get(url);
  }
}
