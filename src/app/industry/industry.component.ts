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

  clickMethod(_requirement) {
    if (confirm('Are you sure to Supply ' + _requirement + ' Liters')) {
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
