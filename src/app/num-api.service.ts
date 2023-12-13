import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumApiService {

  numArray:Array<number> = [100]
  constructor() { }
  setNumber(number:any){
    this.numArray.push(number)
    this.getNumber
  }
  getNumber(){
    return this.numArray
  }
}
