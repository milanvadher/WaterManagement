import { Component, OnInit } from '@angular/core';
import { RestService } from '../../app/rest.service';
import { HttpModule } from '@angular/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.css']
})
export class IndustryComponent implements OnInit {

  allow = false;
  industry: Observable<{}[]>;
  constructor(public restProvider: RestService, public firestore: AngularFirestore) {
    this.getIndus();
  }

  title = 'app';
  users: any;

  getIndus() {
    this.industry = this.firestore.collection(`industrydata`).valueChanges();
    console.log(this.industry);
  }

  clickMethod(user) {
    if (this.allow === true) {
      if (confirm('Are you sure to Supply ' + user.members + ' Liters')) {
        this.submit(user);
      }
    } else {
      alert('You not supply the water');
    }
  }

  submit(user) {
    // firestore function for raspberry pi
    this.restProvider.dataAPIindus(user);
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
