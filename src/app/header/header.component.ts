import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
act:any='Home';
  constructor() { }

  ngOnInit() {
  }



  getState(value:any){

this.act=value;

  }
}
