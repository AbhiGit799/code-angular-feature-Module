import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { ManagerListComponent } from './manager-list/manager-list.component';


@NgModule({
  declarations: [
    ManagerComponent,
    ManagerListComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule {
  constructor()
  {
    console.log("Manager module loaded...");
    
  }
 }
