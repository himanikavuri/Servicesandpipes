import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataServices/dataservice.service';
import { EmployeeData } from '../dataServices/employeedata.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  testResult: any;
  testData: any;
  constructor(private ds: DataService,private ed:EmployeeData) {
    console.log("hiiiiiiiiii")
   }

  login(){
    this.ds.getData()
    .subscribe(result=>{
      this.testData= result;
      console.log("result ", result);
    },
    err=>{
      console.log("err "+err);
    })
    
  
  }


  ngOnInit() {
    console.log("initttttttt");
  }

}
