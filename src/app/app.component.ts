import { Component, ViewChild } from '@angular/core';
import { TaskComponent } from './task-feature/task/task.component';
import { Task } from './task-feature/task/model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  task = new Task({
    id: 1,
    content: '建立待辦事項元件',
    type: 'Work',
    important: true,
    urgent: true,
    state: 'None',
  });

  task_2 = new Task({
    id: 2,
    content: '購買 iPhone 手機 - 30000',
    type: 'Other',
    important: false,
    urgent: false,
    state: 'None',
  });

  task_3 = new Task({
    id: 3,
    content: '家庭聚餐',
    type: 'Home',
    important: true,
    urgent: false,
    state: 'None',
  });

  totalCount = 10;

  finishCount = 3;

  onSetState(task: Task, state: 'None' | 'Doing' | 'Finish'): void {
    task.state = state;
  }
}
