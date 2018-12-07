import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';
import { LoginPage } from '../login/login';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  goToRoute(route) {
    if (route == 'home') {
      this.navCtrl.push(HomePage);
    } else if (route == 'about') {
      this.navCtrl.push(AboutPage);
    } else {
      this.navCtrl.push(ContactPage);
    }
  }

  logout() {
    let elem = document.getElementsByClassName('tabbar');
    elem[0].style.display = 'none';
    this.navCtrl.push(LoginPage, {}, {animate: true, animation: 'forward'});
  }

}
