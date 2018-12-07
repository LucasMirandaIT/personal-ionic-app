import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilesListProvider } from '../../providers/files-list/files-list';

/**
 * Generated class for the FilesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-files-list',
  templateUrl: 'files-list.html',
})
export class FilesListPage {

  myFiles;

  constructor(public navCtrl: NavController, public navParams: NavParams,public filesService: FilesListProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilesListPage');
    this.loadFiles();
  }

  loadFiles() {
    this.filesService.loadFiles().toPromise().then((retorno: any) => {
      this.myFiles = retorno;
      console.log('MyFile Retorno', this.myFiles);
    }).catch((err: any) => {
      console.log('Error print: ', err);
    })
  }

  navigateToLink(url) {
    window.open(url, '_blank');    
  }

}
