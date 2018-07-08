import { Component, OnInit } from '@angular/core';
import {TravelServiceService} from '../travel-service.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  detailsArray:any[]=[];
  constructor(private tservice: TravelServiceService,private modalService: NgbModal) { }

  ngOnInit() {this.tservice.getPlaces().subscribe(res => {
    // Handle result
    this.detailsArray=res.details;
   
  },
  error => {
   console.log("error");
  },)
  }
  closeResult: string;
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  detailsCall(details:any){


  }
}
