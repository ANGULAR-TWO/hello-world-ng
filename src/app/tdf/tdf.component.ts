import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(x)
  {
    console.log(x);
  }

  submit(f)
  {
      console.log(f);
  }

  contactMethods=[

    {id:1,name:'Email'},
    
    {id:2,name:'Phone'},
    
    {id:3,name:'Courier'},
  ];
}
