import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable }  from 'rxjs'

@Injectable()
export class DataService  {
    result:any[];
    err:any[];
    constructor(private http:HttpClient){

    }
getData() {
  return  this.http.get("https://jsonplaceholder.typicode.com/posts");
}
registerData(pay){
    console.log("register")
}

}
