import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
act:any='Home';
overDis=false;
  constructor() { }

  ngOnInit() {
  }



  getState(value:any){

this.act=value;

  }


  getOverlay(){
    this.overDis=!this.overDis;
  }
}
