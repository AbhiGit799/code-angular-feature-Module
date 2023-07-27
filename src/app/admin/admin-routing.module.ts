import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';

const routes: Routes = [
   //Below route is synatx for lazy loading

    {
      path:'',component:AdminComponent,
  
     children:[
  
     {path:'user-list',component:AdminListComponent}
  
    ]
  
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
