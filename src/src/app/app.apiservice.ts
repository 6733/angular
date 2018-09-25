import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: Http) { }

  getPosts(): Observable<any> {
  /* return this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      //return data;
    }); */
      return this.http.get('https://reqres.in/api/users?page=1').pipe(res=>res);
  }

}