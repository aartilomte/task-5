import { Injectable } from "@angular/core";
import { UserService } from "./user.service";
import { BehaviorSubject } from "rxjs";

@Injectable()

export class LoginServeice{
    isLogged: boolean = false;
    constructor( private userServe : UserService){}
    fname = new BehaviorSubject(undefined)
    
    sendId(fName : any){
        console.log(this.fname)
        this.fname.next(fName);
    }

    SignIn(username : string , password : string){
        const user = this.userServe.users.find(
            (u) => u.username == username && u.password == password
        )
        if(user == undefined){
            this.isLogged = false
        }else{
            this.isLogged = true
            return user
        }
        return user
    }
    onSignIn(firstName : string){
        const name = this.userServe.leaveData.find((u) => u.firstName == firstName)
    }

}