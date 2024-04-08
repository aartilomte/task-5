import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable()
export class LoginHttpService {
    constructor(private http : HttpClient){}

    postData(param : any){
        this.http.post('https://task-5-b-default-rtdb.asia-southeast1.firebasedatabase.app/login.json' , param).subscribe((param : any)=>{
            console.log(param)
        })
    }

    getStudents(){
        return this.http.get('https://task-5-b-default-rtdb.asia-southeast1.firebasedatabase.app/login.json').pipe(map((resp : any)=>{
            const myStdArr = [];
            for(let stdIn in resp){
                myStdArr.push({...resp[stdIn]})
            }
            console.log(myStdArr);
            return myStdArr
        }))
    }




}