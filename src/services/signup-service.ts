import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

export class User {
    fullName:string;
    email:string;
    pass: number;
    id: number;
    
    constructor(fullName:string, email:string, password: number, id: number) {
        this.fullName = fullName;
        this.pass = password;
        this.id = id;
        this.email = email;
    }
}

@Injectable()
export class SignUpServicePage {
    currentUser: User;

    public onSignUp(credentials) {
        if ( credentials.fullName === null || 
            credentials.id ===null ||
            credentials.email === null || 
            credentials.password === null) {
          return Observable.throw("Please insert credentials");
        } else {
          // At this point store the credentials to your backend!
          return Observable.create(observer => {
            observer.next(true);
            observer.complete();
          });
        }
    }
    
    public getUserInfo() : User {
        return this.currentUser;
    }
}