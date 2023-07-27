import { Component } from '@angular/core';

@Component({
  selector: 'app-executive-list',
  templateUrl: './executive-list.component.html',
  styleUrls: ['./executive-list.component.css']
})
export class ExecutiveListComponent {

  executive:any;

  constructor()
  {

  }

  ngOnInit()
  {
    this.executive=[
      {name:'HR',country:'India'},
      {name:'Finance',country:'India'},
      {name:'Marketing',country:'India'},
    ]
  }

}
