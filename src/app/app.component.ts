import { Component, ViewEncapsulation } from '@angular/core';
import { DemoClass } from './demo-class';
import { PipeTestPipe } from './pipe-test.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DemoClass,PipeTestPipe],
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
  
  data: any = [
    {
      id: 1,
      cName: "India",
      people: [
        {
          name: "hari"
        },
        {
          name: "kuldeep"
        },
        {
          name: "sunil chettri"
        }
      ]
    },
    {
      id: 2,
      cName: "UK",
      people: [
        {
          name: "hari-uk"
        },
        {
          name: "kuldeep-uk"
        },
        {
          name: "sunil chettri-uk"
        }
      ]
    },
    {
      id: 1,
      cName: "Australia",
      people: [
        {
          name: "hari-aus"
        },
        {
          name: "kuldeep-aus"
        },
        {
          name: "sunil chettri-aus"
        }
      ]
    },
    {
      id: 1,
      cName: "china",
      people: [
        {
          name: "hari-chn"
        },
        {
          name: "kuldeep-chn"
        },
        {
          name: "sunil chettri-chn"
        }
      ]
    }
  ]
  constructor(private router: Router){
    localStorage.setItem("userLoggedIn","false")
  }
}
