import { Injectable, OnInit } from "@angular/core"
import { LoginHttpService } from "./login-http.service"
import { LeavedetailsHttp } from "./leave-deatils-http.service";

@Injectable()
export class UserService implements OnInit{
    users: any[] = [];
    leaveData : any[] = [];
    constructor( private http : LoginHttpService , private https : LeavedetailsHttp){}

    ngOnInit(): void {
        this.getData()
    }
    
    getData(){
        this.http.getStudents().subscribe((param : any)=>{
            console.log(param)
            this.users = param
        })
    }

    leaveDataGetAll(){
        this.https.getData().subscribe((param : any)=>{
            console.log(param);
            this.leaveData = param;
        })
    }
}