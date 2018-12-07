import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environments';


/*
  Generated class for the FilesListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FilesListProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FilesListProvider Provider');
  }

  loadFiles() {
    let backEndRoute = environment.URL_BACKEND_PROD + 'driveFiles/listAll';
    return this.http.get(backEndRoute);
  }

}
