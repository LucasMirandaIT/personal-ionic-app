import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilesListPage } from './files-list';

@NgModule({
  declarations: [
    FilesListPage,
  ],
  imports: [
    IonicPageModule.forChild(FilesListPage),
  ],
})
export class FilesListPageModule {}
