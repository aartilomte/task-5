import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { HodComponent } from './hod/hod.component';
import { StaffComponent } from './staff/staff.component';
import { LeaveDetailsComponent } from './staff/leave-details/leave-details.component';
import { LeaveRequestComponent } from './hod/leave-request/leave-request.component';
import { RequestStatusComponent } from './staff/request-status/request-status.component';
import { SignComponent } from './sign/sign.component';

const routes: Routes = [
  {path : '' , component : SignComponent},
  {path : 'resister' , component : RegistrationFormComponent},
  {path : 'hod' , component : HodComponent},
  {path : 'staff' , component : StaffComponent},
  {path : 'leave-details' , component : LeaveDetailsComponent},
  {path : 'leave-request' , component : LeaveRequestComponent},
  {path : 'request-status' , component : RequestStatusComponent},
  {path : 'signIN' , component : SignComponent},
  // {path : '/' , redirectTo : 'SigninComponent' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
