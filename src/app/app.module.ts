import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoClass } from './demo-class';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { PipeTestPipe } from './pipe-test.pipe';
import { ServiceComponent } from './service/service.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { NameService } from './name.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PipeTestPipe,
    ServiceComponent,
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DemoClass,NameService],
  bootstrap: [AppComponent]
})
export class AppModule {
  name: any
  constructor(){}
 }
