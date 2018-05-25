import {Injectable} from '@angular/core';
import {HttpClient}from '@angular/common/http';

@Injectable()
export class EmployeeData{
    result:any[];
    err:any[];
    constructor(private http:HttpClient){

    }
    getEmployee():any{
        return this.http.get("https://jsonplaceholder.typicode.com/posts")
    }
}