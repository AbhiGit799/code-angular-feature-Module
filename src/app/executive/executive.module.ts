import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExecutiveRoutingModule } from './executive-routing.module';
import { ExecutiveComponent } from './executive.component';
import { ExecutiveListComponent } from './executive-list/executive-list.component';


@NgModule({
  declarations: [
    ExecutiveComponent,
    ExecutiveListComponent
  ],
  imports: [
    CommonModule,
    ExecutiveRoutingModule
  ]
})
export class ExecutiveModule { }
