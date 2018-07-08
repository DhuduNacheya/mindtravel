import { Component, OnInit } from '@angular/core';
import {TravelServiceService} from '../travel-service.service';
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  constructor(private tservice: TravelServiceService) { }
  places:any[];
  area:any[]=[];
  ngOnInit() {
    this.tservice.getPlaces().subscribe(res => {
      // Handle result
      this.places=res.data
     this.area=res.area;
    },
    error => {
     console.log("error");
    },)
  }

}
