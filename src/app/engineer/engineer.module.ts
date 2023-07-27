import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineerRoutingModule } from './engineer-routing.module';
import { EngineerComponent } from './engineer.component';
import { EngineerListComponent } from './engineer-list/engineer-list.component';


@NgModule({
  declarations: [
    EngineerComponent,
    EngineerListComponent
  ],
  imports: [
    CommonModule,
    EngineerRoutingModule
  ]
})
export class EngineerModule { }
