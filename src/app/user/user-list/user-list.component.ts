import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  user:any;

  constructor()
  {

  }

  ngOnInit()
  {
    this.user=[
      {name:'Hussey',country:'USA'},
      {name:'David',country:'England'},
      {name:'Sam',country:'Australia'},
    ]
  }

}
