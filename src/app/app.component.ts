import { Component, ViewChild } from '@angular/core';
import { TaskComponent } from './task-feature/task/task.component';
import { Task } from './task-feature/model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  tasks = [
    new Task({id: 1, content: '建立代辦事項元件', type: 'Work', important: true, urgent: true, state: 'None'}),
    new Task({id: 2, content: '購買 iphone 3000 元', type: 'Work', important: true, urgent: false, state: 'None'}),
    new Task({id: 3, content: '家庭聚餐', type: 'Work', important: false, urgent: true, state: 'None'}),
  ];

  totalCount = 10;

  finishCount = 3;

  onSetState(task: Task, state: 'None' | 'Doing' | 'Finish'): void {
    task.state = state;
  }
}
