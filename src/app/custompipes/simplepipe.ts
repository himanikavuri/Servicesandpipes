import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'simplepipe'
})

export class SimplePipe implements PipeTransform{
transform(value:any){
    return value + value;
}
}
