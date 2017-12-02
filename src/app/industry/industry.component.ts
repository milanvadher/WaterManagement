import { Component, OnInit } from '@angular/core';
import { RestService } from '../../app/rest.service';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.css']
})
export class IndustryComponent implements OnInit {

  constructor(public restProvider: RestService) { 
    this.getIndus();
  }

  title = 'app';
  users: any;

  getIndus() {
    this.restProvider.getIndus({})
    .then(data => {
      console.log(data);
      this.users = data;
      console.log(this.users);
    });
  }

  clickMethod(_requirement) {
    if(confirm("Are you sure to Supply "+_requirement+" Liters")) {
      this.submit(_requirement);
    }
  }

  submit(liter) {
    const text = {
      'liter': liter
    };
    this.restProvider.dataAPI(text)
      .then(data => {
        console.log(data);
      }, (err) => {
        console.log(err);
      });
    }

  ngOnInit() {
  }

}
