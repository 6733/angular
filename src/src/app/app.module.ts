import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DetailsComponent } from './details.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpModule,RouterModule.forRoot([{
        path: 'details',
        component: DetailsComponent
      },
      
       { path: '',   component: HelloComponent}])],
  declarations: [ AppComponent, HelloComponent,DetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
