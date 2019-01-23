import { Component } from "@angular/core";
import { QueryPage } from "../query/query";
import { ProfilePage } from "../profile/profile";
import { NotificationPage } from "../notification/notification";

@Component({
    selector: 'page-tabs',
    template: `
        <ion-tabs>
            <ion-tab [root]="queryPage" tabIcon="home"></ion-tab>
            <ion-tab [root]="notificationPage" tabIcon="notifications"></ion-tab>
            <ion-tab [root]="profilePage" tabIcon="contact"></ion-tab>
        </ion-tabs>
    `,
    styles: [`
        .tabs-ios .tab-button-icon {
            color: #fff !important;
        }`
    ]
})

export class TabsPage{
    queryPage = QueryPage;
    notificationPage = NotificationPage;
    profilePage = ProfilePage;
}