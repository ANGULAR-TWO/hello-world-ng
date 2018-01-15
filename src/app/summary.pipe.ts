import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
name:'summary'
})
export class SummaryPipe implements PipeTransform
{
    //https://angular.io/api/core/PipeTransform
    transform(value:string,limit?:any)
    {
      if(!value) return null;
     // return value.substr(0,8)+ '...'
     let actualLimit=limit ? limit : 8;
      return value.substr(0,actualLimit)+ '...'
      
    }
}
