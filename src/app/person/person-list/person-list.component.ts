import { Component } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {

  person:any;
  constructor()
  {

  }

  ngOnInit()
  {
    this.person=[

      {name:'Ajay',country:'India'},
      {name:'Karan',country:'India'},
      {name:'Arjun',country:'India'},

    ];


  }

}
