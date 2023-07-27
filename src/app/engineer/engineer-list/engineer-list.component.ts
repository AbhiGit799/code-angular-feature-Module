import { Component } from '@angular/core';

@Component({
  selector: 'app-engineer-list',
  templateUrl: './engineer-list.component.html',
  styleUrls: ['./engineer-list.component.css']
})
export class EngineerListComponent {

  engineer:any;

  constructor()
  {

  }

  ngOnInit()
  {
    this.engineer=[
      {name:'Civil',country:'India'},
      {name:'EC',country:'India'},
      {name:'EE',country:'India'},
    ]
  }

}
