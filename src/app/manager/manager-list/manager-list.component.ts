import { Component } from '@angular/core';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent {

  manager:any;

  constructor()
  {

  }

  ngOnInit()
  {
    this.manager=[
      {name:'Ram',country:'India'},
      {name:'Shyam',country:'India'},
      {name:'Rohan',country:'India'},
    ]
  }

}
