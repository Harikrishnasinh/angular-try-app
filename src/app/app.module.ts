import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoClass } from './demo-class';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeTestPipe } from './pipe-test.pipe';
import { ServiceComponent } from './service/service.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { NameService } from './name.service';
import { Test2Component } from './test2/test2.component';
import { NumApiService } from './num-api.service';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { NgForm,FormGroup,FormBuilder,FormControl } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PipeTestPipe,
    ServiceComponent,
    AboutUsComponent,
    ContactComponent,
    Test2Component,
    StudentComponent,
    StudentDetailsComponent,
    StudentRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule, BrowserAnimationsModule,MatSlideToggleModule ,MatCardModule
  ],
  providers: [DemoClass,NameService],
  bootstrap: [AppComponent]
})
export class AppModule {
  name: any
  constructor(){}
 }
