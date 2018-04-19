import { Component, OnInit } from '@angular/core';
import { RestService } from '../../app/rest.service';
import { HttpModule } from '@angular/http';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allow = false;
  homedata: Observable<{}[]>;
  liter: any;

  constructor(public restProvider: RestService, public firestore: AngularFirestore) {
    this.getUsers();
  }

  title = 'app';
  users: any;

  getUsers() {
    this.homedata = this.firestore.collection(`homeData`).valueChanges();
    console.log(this.homedata);
  }

  clickMethod(user) {
    if (this.allow === true) {
      if (confirm('Are you sure to Supply ' + user.members * 150 + ' Liters')) {
        this.submit(user);
      }
    } else {
      alert('You not supply the water');
    }
  }

  submit(user) {
    this.restProvider.dataAPIhome(user);
    console.log('clicked submit');
  }

  ngOnInit() {
  }

  onChange(data) {
    if (data.checked === true) {
      this.allow = true;
    } else {
      this.allow = false;
    }
    console.log(data);
  }

}
