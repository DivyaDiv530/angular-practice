import { HttpClient } from '@angular/common/http';
import { Injectable, VERSION } from '@angular/core';

@Injectable({
  providedIn:'root';
})
export class ApiServices  {
  constructor(private http:HttpClient) {

  }
  getUserData() {
return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}