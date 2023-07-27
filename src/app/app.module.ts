import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { Testdata } from './testdata';
import { Student3Module } from './student3/student3.module';
import { CompanyModule } from './company/company.module';
import { PersonModule } from './person/person.module';
import { HomeComponent } from './home/home.component';
import { EngineerModule } from './engineer/engineer.module';
import { ExecutiveModule } from './executive/executive.module';
import { AdminModule } from './admin/admin.module';
import { ManagerModule } from './manager/manager.module';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule,FormsModule,
  
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(Testdata),

    Student3Module, //<--- Eager Loading

    CompanyModule,  //<--- Eager Loading

    PersonModule,   //<--- Eager Loading
   
    // EngineerModule, <--- Removing Engineer  for Lazy loading example.

    // ExecutiveModule, <----Routing Lazy loading data:{preload:true}
   
   // ManagerModule, <---Routing Lazy loading data:{preload:true,delay:true}

   // AdminModule, <--- canload guard routing

   // UserModule, <--- canActivate guard routing
  
  ],
  providers:[], //example for showing nesting service example.
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log("App module loaded...");
    
  }
}
