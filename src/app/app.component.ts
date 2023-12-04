import { Component, ViewEncapsulation } from '@angular/core';
import { DemoClass } from './demo-class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DemoClass],
  // encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent {
  // title = 'app';
  // hi: string = ""
  // constructor(private obj:DemoClass){
  //   this.hi = obj.show()
  // }
  cData:string = ""
  get(val: any){
    console.log("got")
    this.cData = val
  }
}
