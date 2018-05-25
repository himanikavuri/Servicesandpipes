import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name:'adding'
})

export class AddingPipe implements PipeTransform{
transform(value:string,beforeid:string,afterid:string):string{
let totalVal=beforeid+ ' '+value+' '+afterid;
return totalVal;
}
}
