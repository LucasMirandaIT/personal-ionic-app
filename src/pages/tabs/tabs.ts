import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { NavController } from 'ionic-angular';
import { FilesListPage } from '../files-list/files-list';
import { GithubReposPage } from '../github-repos/github-repos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FilesListPage;
  tab3Root = GithubReposPage;

  constructor(public navCtrl: NavController) {
  }
}
