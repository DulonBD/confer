import { Component } from '@angular/core';

import { Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-profile-edit',
  templateUrl: 'profile-edit.html'
})
export class ProfileEditPage {
 
    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController
    ) {}

    dismiss() {
        this.viewCtrl.dismiss();
    }
}