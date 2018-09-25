import { Component } from '@angular/core';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor() {}
 name : any = '';

  parentClick(user){

    alert('parent:'+user.id)

  }
 



}
