import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { RequestOptions } from '@angular/http';
import { BaseRequestOptions } from '@angular/http/src/base_request_options';
@Injectable()
export class RestService {

  constructor(public http: HttpClient) { }

  apiUrl = 'https://data.diatonic70.hasura-app.io/v1/query';


  dataAPI(data) {
    console.log(data);
    
    var body = {
      "type": "insert",
      "args": {
          "table": "DeviceAPI",
          "objects": [
              {
                  "flag": "false",
                  "liter": data.liter
              }
          ]
      }
  };
    
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl, JSON.stringify(body))
        .subscribe(res => {
          console.log(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  
  
  getIndus(data) {
    var body = {
      "type": "select",
      "args": {
        "table": "Industry",
        "columns": [
          "*"
        ]
      }
    };
    
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl, JSON.stringify(body))
      .subscribe(res => {
        console.log(res)
        resolve(res);
      }, (err) => {
        console.log(err);
        reject(err);
      });
    });
    
  }
  
  addUser(data) {
    
    var body = {
      "type": "select",
      "args": {
        "table": "Home",
        "columns": [
          "*"
        ]
      }
    };
    
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl, JSON.stringify(body))
      .subscribe(res => {
        console.log(res)
        resolve(res);
      }, (err) => {
        console.log(err);
        reject(err);
      });
    });
  }
  
}