import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginHttpService } from '../shared/login-http.service';
import { LoginServeice } from '../shared/login.service';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { LeavedetailsHttp } from '../shared/leave-deatils-http.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.scss'
})

export class SignComponent implements OnInit{
  mySignForms : FormGroup | any;

  
  constructor(private dialog: MatDialog,private leave : LeavedetailsHttp, private http : LoginHttpService , private loginhttp : LoginServeice , private router : Router , private userServe : UserService ){}

  ngOnInit(): void {
    this.mySignForms = new FormGroup({
      username : new FormControl('',[Validators.required]),
      password : new FormControl('', Validators.required)
    })

    // this.getData()
    this.userServe.getData()
  }
 
  onSign(value1: string, value2: string){
    // console.log(this.mySignForms.value)
    console.log(value1,value2)
    const username = value1;
    const password = value2;
  const resisterdUser = this.loginhttp.SignIn(username , password );
  console.log(resisterdUser)
  let person = this.userServe.users.find((u) => u.username === username && u.password === password);

  // const staff = this.loginhttp.onSignIn(username);
  // let staffUniq = this.userServe.leaveData.find((u) => u.firstName === username)

console.log(person)
console.log(this.userServe.users)
if(resisterdUser.role === 'option2'){
  this.router.navigate(['/leave-request'])
  
} else if(person.username == person.firstName){
  const name = person.firstName
  console.log(name)
  this.loginhttp.sendId(name)
  this.router.navigate(['/request-status'])
}
  }
    }
  


