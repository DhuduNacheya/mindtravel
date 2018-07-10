import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  getSocial:boolean=true;
  title = 'app';

  getreallySocial(){

    this.getSocial=!this.getSocial;
  }
}
