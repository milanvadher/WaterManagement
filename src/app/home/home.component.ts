import { Component, OnInit } from '@angular/core';
import { RestService } from '../../app/rest.service';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  liter: any;

  constructor(public restProvider: RestService) {
    this.getUsers();
  }

  title = 'app';
  users: any;

  getUsers() {
    this.restProvider.addUser({})
      .then(data => {
        console.log(data);
        this.users = data;
        console.log(this.users);
      });
  }

  clickMethod(members) {
    if(confirm("Are you sure to Supply "+members*150+" Liters")) {
      this.submit(members*150);
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

    console.log("clicked submit")
  }

  ngOnInit() {
  }

}
