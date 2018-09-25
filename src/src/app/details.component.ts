import { Component, Input,Output,OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'details-more',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit  {

 constructor(private router: Router) {}

ngOnInit(){

}
  
}
