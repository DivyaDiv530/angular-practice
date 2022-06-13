import { Component, OnInit, VERSION } from '@angular/core';
import { ApiServices } from './api.services';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  constructor(private apiService:ApiServices) {}
  ngOnInit() {
    console.log("Hello");
this.apiService.getUserData.subscribe((data)=>{
  console.log(data);
})
  }
}
