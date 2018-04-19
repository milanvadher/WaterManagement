import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { RequestOptions } from '@angular/http';
import { BaseRequestOptions } from '@angular/http/src/base_request_options';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class RestService {

  constructor(public http: HttpClient, public firestore: AngularFirestore) { }

  dataAPIindus(data) {
    console.log(data);
    try {
      const id = this.firestore.createId();
      this.firestore.doc(`waterSupply/${id}`).set({
        id: id,
        water: data.members,
        industryName: data.industryName
      }).then(() => {
        this.firestore.doc(`industrydata/${data.id}`).delete();
      });
    } catch (e) {
      console.log('Error: ', e);
    }
  }

  dataAPIhome(data) {
    console.log(data);
    try {
      const id = this.firestore.createId();
      this.firestore.doc(`waterSupply/${id}`).set({
        id: id,
        water: data.members * 150,
        name: data.name
      }).then(() => {
        this.firestore.doc(`homeData/${data.id}`).delete();
      });
    } catch (e) {
      console.log('Error: ', e);
    }
  }

}
