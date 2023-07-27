import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
    //Below route is synatx for lazy loading
  {
    path:'',component:UserComponent,

   children:[

   {path:'user-list',component:UserListComponent}

  ]

 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
