import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  rootPage = TabsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(username, password) {
    let loading = this.loadingCtrl.create({
      content: "Fazendo Login... <br> Por favor Aguarde"
    });
    loading.present();
    this.auth.login(username, password).toPromise().then((retorno: any) => {
      loading.dismiss();
      if (retorno.length > 0) {
        this.navCtrl.setRoot(this.rootPage);
        console.log('Successfully logged', retorno);
      } else {
        loading.dismiss();

        const alert = this.alertCtrl.create({
          title: 'Erro ao logar!',
          subTitle: 'Verifique os dados digitados e tente mais tarde',
          buttons: ['OK']
        });
        alert.present();
      }
    }).catch((err: any) => {
      const alert = this.alertCtrl.create({
        title: 'Erros Internos!',
        subTitle: 'Estamos com problemas no nosso servidor, por favor tente novamente mais tarde.',
        buttons: ['OK']
      });
      alert.present();
    });
  }

}
