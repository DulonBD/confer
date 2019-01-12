import { Component, OnInit } from "@angular/core";
import { QueryServicePage } from "../../services/query-service";
import { SingleQueryPage } from "./single-query/single-query";
import { NavController } from "ionic-angular";
import { ProfileShowPage } from "../profile/profile-show/profile-show";

@Component ({
    selector: 'page-query',
    templateUrl: 'query.html',
})

export class QueryPage implements OnInit {
    query;
    profile;
    // showProfile = ProfileShowPage;
    singleQueryPage = SingleQueryPage;

    constructor(
        public queryService: QueryServicePage,
        public navCtrl:NavController
    ) {}
    
    ngOnInit() {
        this.query = this.queryService.querys;
    }

    goToProfile() {
        this.navCtrl.push(ProfileShowPage);
    }
}