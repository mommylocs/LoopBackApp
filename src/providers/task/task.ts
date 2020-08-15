import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the TaskProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskProvider {
  apiBaseUrl: string = '';
  constructor(public http: HttpClient) {
    this.apiBaseUrl = ' http://localhost:3000/api/';
  }
  getTasks() {
    return new Promise(resolve => {
      this.http.get(this.apiBaseUrl + 'Tasks').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    });
  }
  addTasks(task) {
    return new Promise(resolve => {
      this.http.post(this.apiBaseUrl + 'Tasks', task).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    });
  }
  updateTasks(id, task) {
    return new Promise(resolve => {
      this.http.put(this.apiBaseUrl + 'Tasks/' + id, task).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    });
  }
  removeTasks(id) {
    return new Promise(resolve => {
      this.http.delete(this.apiBaseUrl + 'Tasks/' + id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    });
  }
}
