import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {provideNativeDateAdapter} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StaffComponent } from './staff/staff.component';
import { HodComponent } from './hod/hod.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeaveDetailsComponent } from './staff/leave-details/leave-details.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { LeaveRequestComponent } from './hod/leave-request/leave-request.component';
import { LeavedetailsHttp } from './shared/leave-deatils-http.service';
import { RequestStatusComponent } from './staff/request-status/request-status.component';
import { SignComponent } from './sign/sign.component';
import { LoginHttpService } from './shared/login-http.service';
import { LoginServeice } from './shared/login.service';
import { UserService } from './shared/user.service';
import { InitialPgComponent } from './initial-pg/initial-pg.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    HodComponent,
    RegistrationFormComponent,
    LeaveDetailsComponent,
    LeaveRequestComponent,
    RequestStatusComponent,
    SignComponent,
    InitialPgComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatStepperModule,
    MatSelectModule
  ],
  providers: [
     provideAnimationsAsync(),
    provideNativeDateAdapter(),
    LeavedetailsHttp,
    LoginHttpService,
    LoginServeice,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
