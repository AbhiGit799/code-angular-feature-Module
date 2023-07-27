import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngineerComponent } from './engineer.component';
import { EngineerListComponent } from './engineer-list/engineer-list.component';

const routes: Routes = [

  //Below route is synatx for lazy loading
  {
    path:'',component:EngineerComponent,

   children:[

   {path:'engineer-list',component:EngineerListComponent}

  ]

 }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngineerRoutingModule { 
  constructor()
  {
    console.log("Engineer Module loaded...");
    
  }
}
