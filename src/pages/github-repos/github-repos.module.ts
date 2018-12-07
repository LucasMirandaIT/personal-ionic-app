import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GithubReposPage } from './github-repos';

@NgModule({
  declarations: [
    GithubReposPage,
  ],
  imports: [
    IonicPageModule.forChild(GithubReposPage),
  ],
})
export class GithubReposPageModule { }
