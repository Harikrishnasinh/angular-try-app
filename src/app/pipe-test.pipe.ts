import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTest',
})
export class PipeTestPipe implements PipeTransform {

  transform(value: any): any {
    if (value.toLowerCase() == "india"){  
      return "IND. " + value
    }
    else if(value.toLowerCase() == "australia"){
      return "AUS. " + value
    }else{
      return " Cnt" + value
    }
    // return value.slice(0,3).toUpperCase() +"   "+ value
  }
}