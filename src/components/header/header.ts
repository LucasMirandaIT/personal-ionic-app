import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../../pages/menu/menu';

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  @Input() title: string;


  constructor(public navCtrl: NavController) {
  }

  expandHeader() {
    console.log('Expand Header');
    this.navCtrl.push(MenuPage);
  }

}
