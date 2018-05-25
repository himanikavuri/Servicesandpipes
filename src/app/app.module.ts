import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes,RouterLink } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService } from './dataServices/dataservice.service';
import {HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import{EmployeeData} from './dataServices/employeedata.service'
import{SimplePipe} from './custompipes/simplepipe'
import{AddingPipe}from './custompipes/addingpipe'
export const routes: Routes = [
  { path: '',component: DashboardComponent},
  { path: 'dashboard',component: DashboardComponent},
  { path: 'login',component: LoginComponent}
   /* children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'overview', component: Overview },
      { path: 'specs', component: Specs }
    ]*/
  
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SimplePipe,
    AddingPipe
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],

  
  providers: [DataService,EmployeeData],
  bootstrap: [AppComponent]
})

export class AppModule { }
