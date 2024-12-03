import { Component, OnInit, ViewChild } from '@angular/core';

import { Task } from './task-feature/model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('button', { static: true })
  button!: unknown;

  tasks: Task[] = [];

  totalCount = 10;

  finishCount = 3;

  ngOnInit(): void {
    this.onLoad();

    console.log(this.button);
  }

  onSetState(task: Task, state: 'None' | 'Doing' | 'Finish'): void {
    task.state = state;
  }

  trackById(index: number, task: Task): number {
    return task.id;
  }

  onLoad(): void {
    this.tasks = [
      new Task({
        id: 1,
        content: '建立待辦事項元件',
        type: 'Work',
        important: true,
        urgent: true,
        state: 'None',
      }),
      new Task({
        id: 2,
        content: '購買 iPhone 手機 - 30000元',
        type: 'Other',
        important: false,
        urgent: false,
        state: 'None',
      }),
      new Task({
        id: 3,
        content: '家庭聚餐',
        type: 'Home',
        important: true,
        urgent: false,
        state: 'None',
      }),
    ];
  }

  onClear(): void {
    this.tasks = [];
  }
}
