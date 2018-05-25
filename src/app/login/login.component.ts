import { Component, OnInit } from '@angular/core';
import { EmployeeData } from '../dataServices/employeedata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
testResult:any;
  constructor(private ed:EmployeeData) { 
    console.log("himani")
  }

clickme(){
  this.ed.getEmployee()
  .subscribe(result=>{
    this.testResult=result;
    console.log("result",result);
  },
  err=>{
    console.log("err",err)
  }
)
}
  ngOnInit() {
  console.log("hi")
  }


}
