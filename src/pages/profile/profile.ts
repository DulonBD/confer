import { Component, OnInit } from "@angular/core";
import { ProfileServicePage } from "../../services/profile-service";
import { ProfileEditPage } from "./profile-edit/profile-edit";
import { PostPage } from "./post/post";
import { AnswerPage } from "./answer/answer";
import { ModalController, ViewController, NavController } from "ionic-angular";

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {
    profile;

    constructor ( 
        public profileService: ProfileServicePage, 
        public modalCtrl: ModalController,
        public viewCtrl: ViewController,
        public navCtrl: NavController
    ){}

    ngOnInit () {
        this.profile = this.profileService.profiles;
    }

    openModal() {

        let modal = this.modalCtrl.create(ProfileEditPage);
        modal.present();
    }

    goToPost() {
        this.navCtrl.push(PostPage);
    }
    goToAnswer() {
        this.navCtrl.push(AnswerPage);
    }
}