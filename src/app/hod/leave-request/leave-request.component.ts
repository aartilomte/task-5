import { Component, OnInit } from '@angular/core';
import { LeavedetailsHttp } from '../../shared/leave-deatils-http.service';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrl: './leave-request.component.scss'
})
export class LeaveRequestComponent implements OnInit{
  deatils : any[] = []
  sortedData : any[] = []
  approved: any;
  rejected: any;

  

  constructor( private http : LeavedetailsHttp){this.refreshData()}
  ngOnInit(): void {
    this.http._refreshNeed.subscribe(()=>{
      this.getAllData()
      this.refreshData()
    })
      this.getAllData()
      this.onClickOne
      this.onClick
  }
  refreshData(){
    this.http._refreshNeed.subscribe((param : any)=>{
      this.sortedData = param
    })
    
  }

  getAllData(){
    this.http.getData().subscribe((param : any)=>{
      console.log(param);
      this.deatils = param
      this.refreshData();
    })
  }

  onClick(param : any) : void{
    this.sortedData.push(param)
    this.http.updateDetails(param , 'approved').subscribe((resp)=>{
      console.log(resp);
      this.refreshData()
  });
}

onClickOne(param : any) : void{
  this.http.updateDetails(param , 'rejected').subscribe((detail)=>{
    console.log(detail);
    this.refreshData();
  });
  }
}
