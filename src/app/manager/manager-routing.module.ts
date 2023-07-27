import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { ManagerListComponent } from './manager-list/manager-list.component';

const routes: Routes = [

   //Below route is synatx for lazy loading
   {
    path:'', component:ManagerComponent,

   children:[

   {path:'manager-list',component:ManagerListComponent}

  ]

 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
