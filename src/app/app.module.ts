import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoClass } from './demo-class';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DemoClass],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private object:DemoClass){
    object
  }
 }
