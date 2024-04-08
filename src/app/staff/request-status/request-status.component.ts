import { Component, OnInit } from '@angular/core';
import { LeavedetailsHttp } from '../../shared/leave-deatils-http.service';
import { LoginHttpService } from '../../shared/login-http.service';
import { LoginServeice } from '../../shared/login.service';

@Component({
  selector: 'app-request-status',
  templateUrl: './request-status.component.html',
  styleUrl: './request-status.component.scss'
})
export class RequestStatusComponent implements OnInit{

  data: any[] = [];
  approvedCount: number = 0;
  rejectedCount: number = 0;
  days : any;
  matcher :  any;
  resisterdperson :  any[] = []
  user : any[] = [];
  currntuser : any[] = [];
  myDetails : any[] = []
  constructor(private http : LeavedetailsHttp , private https : LoginHttpService , private loginServe : LoginServeice){this.tm()
    this.total()
  }

  ngOnInit(): void {
    this.tm()
    this.total()
    this.http._refreshNeed.subscribe(()=>{
      this.tm()
    })
    // console.log(this.registeredData)

    this.loginServe.fname.subscribe((id) =>{
      console.log(id);
      this.matcher = id
      // console.log(this.matcher)
    })
  }
  
  tm(){
    this.http.getData().subscribe((param : any)=>{
      console.log(param)
      this.myDetails = param
      console.log(this.myDetails)
      this.total()
      // this.data = param
      // this.user = this.myDetails.filter((name) => name.name === 'a')
    })

    this.days = +this.data
  }

  total(){
    this.user = this.myDetails.filter((name) => name.name === this.matcher)
      console.log(this.user)
      console.log(this.myDetails)

      
      this.approvedCount = this.user.filter(item => item.status === 'approved').length;
      this.rejectedCount = this.user.filter(item => item.status === 'rejected').length;
  }
}
