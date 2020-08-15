import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailPage } from '../../pages/detail/detail';
import { AddTaskPage } from '../../pages/add-task/add-task';
import { TaskProvider } from '../../providers/task/task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  taskList;

  constructor(public navCtrl: NavController, public taskProvider: TaskProvider) {
    this.getTasks();

  }
  getTasks() {
    this.taskProvider.getTasks().then(data => {
      this.taskList = data;
    })
  }
  addTask() {
    this.navCtrl.push(AddTaskPage);
  }
  view() {
    this.navCtrl.push(DetailPage);
  }


}
