import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExecutiveComponent } from './executive.component';
import { ExecutiveListComponent } from './executive-list/executive-list.component';

const routes: Routes = [

  //Below route is synatx for lazy loading
  
  {
    path:'',component:ExecutiveComponent,

   children:[

   {path:'executive-list',component:ExecutiveListComponent}

  ]

 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExecutiveRoutingModule {

  constructor()
  {
    console.log("Executive module loaded...");
    
  }

 }
