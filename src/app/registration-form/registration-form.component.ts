import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginHttpService } from '../shared/login-http.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss'
})
export class RegistrationFormComponent implements OnInit{
  // selectedOption: string | null = null;
  inputValue: string = '';
  user : any;
  selectedOption: string = 'option1';
username = ['HoD' , 'Staff'];


  myResisterFormStaff : FormGroup | any;
  myResisterFormHod : FormGroup | any;
  constructor(private fb : FormBuilder ,private router : Router , private activeRoute : ActivatedRoute , private http : LoginHttpService){}

  ngOnInit(): void {
    this.myResisterFormStaff = this.fb.group({
      firstName : this.fb.control(''),
      lastname : this.fb.control(''),
      email : this.fb.control(''),
      contact : this.fb.control(''),
      dept : this.fb.control(''),
      username : this.fb.control(''),
      password : this.fb.control(''),
      user : this.fb.control(''),
      role : this.fb.control('')
    })
    this.myResisterFormHod = this.fb.group({
      firstName : this.fb.control(''),
      lastname : this.fb.control(''),
      email : this.fb.control(''),
      contact : this.fb.control(''),
      dept : this.fb.control(''),
      username : this.fb.control(''),
      password : this.fb.control(''),
      user : this.fb.control(''),
      role : this.fb.control('')

    })
      
  }

  onSub(){
    console.log(this.myResisterFormStaff.value)

    this.http.postData(this.myResisterFormStaff.value)
    
    this.user = this.myResisterFormStaff.value
    // if(this.user.staffusername.value === 'staff'){
    //     this.router.navigate(['/leave-request'])
    //   }

        this.router.navigate(['/signIN'])

    }
    onSubHod(){
      console.log(this.myResisterFormHod.value)
      this.http.postData(this.myResisterFormHod.value)
    this

  }

  onSelectChange(e: any) {
    this.selectedOption = e.target.value;
  }

}
