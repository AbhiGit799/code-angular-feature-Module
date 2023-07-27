import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent {

  admin:any;

  constructor()
  {

  }

  ngOnInit()
  {
    this.admin=[
      {name:'John',country:'USA'},
      {name:'Jack',country:'England'},
      {name:'Mike',country:'Australia'},
    ]
  }

}
