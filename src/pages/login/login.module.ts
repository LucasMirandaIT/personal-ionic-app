import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { AuthProvider } from '../../providers/auth/auth';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    HttpClient
  ],
  providers: [
    AuthProvider
  ]
})
export class LoginPageModule {}
