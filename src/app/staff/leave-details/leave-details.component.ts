import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LeavedetailsHttp } from '../../shared/leave-deatils-http.service';
import { LoginHttpService } from '../../shared/login-http.service';
import { LoginServeice } from '../../shared/login.service';
import { UserService } from '../../shared/user.service';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrl: './leave-details.component.scss'
})
export class LeaveDetailsComponent implements OnInit{
  resisterdperson: any[] = [];
  data: any;
  staff : any[] = []
  matcher: undefined;
 constructor(private router : Router  ,private http : LeavedetailsHttp , private https : LoginHttpService , private asdf : LoginServeice , private userServe : UserService , private loginServe : LoginServeice){}


  leaveForm : FormGroup | any;
ngOnInit(): void {
    this.leaveForm = new FormGroup({
      reson : new FormControl(''),
      start : new FormControl(''),
      end : new FormControl(''),
      name : new FormControl(''),
      status : new FormControl('pending'),
    })

    this.loginServe.fname.subscribe((id) =>{
      console.log(id);
      this.matcher = id
      // console.log(this.matcher)
    })
}
onSubmit(){
  console.log(this.leaveForm.value)
  this.http.postData({...this.leaveForm.value , name : this.matcher})
  // this.https.postData(this.leaveForm.value)

  const name = this.leaveForm.name;

  this.resisterdperson = this.staff.filter(item => item.name === person.firstName)

  //  this.resisterdperson = this.data.filter(item => item.name === this.matcher.firstName).length;
  // this.staff = this.asdf.onSignIn(name);
  var person = this.userServe.users.find((u) => u.firstName === this.leaveForm.name);

  this.router.navigate(['/request-status'])  
}
}
