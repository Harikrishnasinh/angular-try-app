import { Component } from '@angular/core';
import { NumApiService } from '../num-api.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'],
})

export class Test2Component {
  number1: any
  constructor(private num1: NumApiService) { }

  addNumber(val: any) {
    this.num1.setNumber(val.value)
    this.number1 = this.num1.getNumber()
    val.value = ""
  }

}
