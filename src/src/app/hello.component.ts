import { Component, Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from './app.apiservice';
import {Observable} from 'rxjs';


@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: any;

  constructor(private router: Router,private apiserv : ApiService) {}

    ngOnInit(): void {
    this.apiserv.getPosts().subscribe(res => {
     this.name = res.json();
    });
  }

  ngAfterViewInit() {
   
  }



    clikMeinHello(user) {
alert(JSON.stringify(user));
  }

     showdetailpage(user) {

    this.router.navigate(['/details']);
  }



  
}
