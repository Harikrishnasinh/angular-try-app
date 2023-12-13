import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { authGuard } from './auth.guard';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { studentGGuard } from './student-g.guard';
import { Test2Component } from './test2/test2.component';

const routes: Routes = [
  {path:"",component:Test2Component},
  {path:"aboutus",component:AboutUsComponent,canActivate:[authGuard]},
  {path:"service",component:ServiceComponent},
  {path:"contact",component:ContactComponent},
  {path:'student_details',component:StudentDetailsComponent},
  {path:"student",canActivateChild:[studentGGuard],
  children:[
    {path:'',component:StudentComponent},
    {path:'student_registration',component:StudentRegistrationComponent}
  ]
  },
  {path:"**", component: ContactComponent}
  // {path:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
