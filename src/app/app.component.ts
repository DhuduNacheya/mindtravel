import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  getSocial:boolean=false;
  title = 'app';

  getreallySocial(value:boolean){

    this.getSocial=value;
  }
}
