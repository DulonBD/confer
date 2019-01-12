import { Component } from "@angular/core";
import { NavController, Loading, LoadingController, AlertController } from "ionic-angular";
import { SignUpPage } from "../sign-up/sign-up";
import { TabsPage } from "../tabs/tabs";
import { SignInServicePage } from "../../services/signin-service";

@Component ({
    selector: 'page-sign-in',
    templateUrl: 'sign-in.html',
})
export class SignInPage{
    tabsPage = TabsPage;
    signUpPage = SignUpPage;
    loading: Loading;
    signinAcceptence = { userName:'', id:'', password:'' };
    constructor( 
        private navCtrl: NavController, 
        private auth:   SignInServicePage,
        private alertCtrl:AlertController,
        private loadingCtrl: LoadingController
    ){}
    
    onSignIn(){
        
        this.showLoading();
        this.auth.onSignIn(this.signinAcceptence).subscribe(allowed => {
          if(allowed) {
              this.navCtrl.setRoot('TabsPage');
          } 
          else{
            this.showError("Access Denied");
          } 
        },
        error => {
            this.showError(error);
        });
    }

    showLoading() {
        this.loading = this.loadingCtrl.create({
        content: 'Please wait...',
        dismissOnPageChange: true,
        duration:3000
        });
        this.loading.present();
    }

    showError(text) {
        this.loading.dismiss();
 
        let alert = this.alertCtrl.create({
          title: 'Fail',
          subTitle: text,
          buttons: ['OK']
        });
        alert.present();
    }

    // presentLoading() {
    //   const loader = this.loadingCtrl.create({
    //     content: "Please wait...",
    //     duration: 3000
    //   });
    //   loader.present();
    // }
    
    // GoSignUp() {
    //     this.navCtrl.setRoot( SignUpPage );
    // }
}
