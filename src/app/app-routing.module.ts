import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"test",component:TestComponent},
  {path:"aboutus",component:AboutUsComponent},
  {path:"service",component:ServiceComponent},
  {path:"contact",component:ContactComponent},
  {path:"**", component: ContactComponent}
  // {path:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
