import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubProvider } from '../../providers/github/github';

/**
 * Generated class for the GithubReposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-github-repos',
  templateUrl: 'github-repos.html',
})
export class GithubReposPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public gitService: GithubProvider) {
  }

  ionViewDidLoad() {
  }

  loadRepos() {
    this.gitService.loadRepos().toPromise().then((retorno: any) => {

    }).catch((err: any) => {
      console.log('Load GitHub Repos Error: ', err);
    });
  }

}
