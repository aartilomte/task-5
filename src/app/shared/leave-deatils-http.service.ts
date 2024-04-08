import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, map, tap } from "rxjs";

@Injectable()
export class LeavedetailsHttp{
  refreshNeed: any;

  private _refreshNeed$ = new Subject<void>();

  get _refreshNeed(){
      return this._refreshNeed$;
  }
    constructor(private leaveHttp : HttpClient){}

    postData(data : any){
        this.leaveHttp.post('https://task-5-33fa3-default-rtdb.asia-southeast1.firebasedatabase.app/details.json',data).pipe(
            tap(()=>{
                this._refreshNeed.next()
            })
        ).subscribe((param : any)=>{
            console.log(param)
        })
    }


    getData(){
        return this.leaveHttp.get('https://task-5-33fa3-default-rtdb.asia-southeast1.firebasedatabase.app/details.json').pipe(map((detail : any)=>{
            const data = [];
            for(let dataDetails in detail){
                data.push({...detail[dataDetails],id : dataDetails})
            }
            console.log(data);
            return data
        }))
    }

    updateDetails(id:string , status:any){
       return this.leaveHttp.patch('https://task-5-33fa3-default-rtdb.asia-southeast1.firebasedatabase.app/details/'+id+'.json',{status}).pipe(
        tap(()=>{
            this._refreshNeed.next()
        })
    )
        
    }
}