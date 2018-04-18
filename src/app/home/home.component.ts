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

  clickMethod(members) {
    if (confirm('Are you sure to Supply ' + members * 150 + ' Liters')) {
      this.submit(members * 150);
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

    console.log('clicked submit');
  }

  ngOnInit() {
  }

}
