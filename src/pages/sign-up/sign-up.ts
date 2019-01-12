import { Component } from "@angular/core";
import { NavController, Loading, LoadingController, AlertController } from "ionic-angular";
import { SignInPage } from "../sign-in/sign-in";
import { SignUpServicePage } from "../../services/signup-service";

@Component ({
    selector: 'page-sign-up',
    templateUrl: 'sign-up.html',
})
export class SignUpPage{
    signInPage = SignInPage;
    loading: Loading;
    signUpAcceptence = { fullName:'', email:'', id:'', password:'' };
    constructor( 
        private navCtrl: NavController, 
        private auth:SignUpServicePage,
        private alertCtrl:AlertController,
        private loadingCtrl: LoadingController
    ){}
    
    public onSignUp(){
        
        this.showLoading()
        this.auth.onSignUp(this.signUpAcceptence).subscribe(allowed => {
          if(allowed) {
              this.navCtrl.setRoot('signInPage');
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
    
    GoSignIn() {
        this.navCtrl.setRoot( SignInPage );
    }
}