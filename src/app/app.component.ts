import { Component, ViewChild } from '@angular/core';
import { TaskComponent } from './task-feature/task/task.component';
import { Task } from './task-feature/task/model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild(TaskComponent)
  viewTask!: TaskComponent;

  @ViewChild(TaskComponent, { static: true })
  staticTask!: TaskComponent;

  task = new Task({
    id: 1,
    content: '建立待辦事項元件',
    type: 'Work',
    state: 'None',
  });

  totalCount = 10;

  finishCount = 3;

  ngOnInit(): void {
    // 要用右上方的 Open in New Window 功能，利用開發者工具觀察
    console.log('Angular ngOnInit Lift Cycle Hook - viewTask', this.viewTask);
    console.log(
      'Angular ngOnInit Lift Cycle Hook - staticTask',
      this.staticTask
    );
  }

  ngAfterViewInit(): void {
    console.log(
      'Angular ngAfterViewInit Lift Cycle Hook - viewTask',
      this.viewTask
    );
    console.log(
      'Angular ngAfterViewInit Lift Cycle Hook - staticTask',
      this.staticTask
    );
  }

  ngAfterViewChecked(): void {
    console.log('Angular ngAfterViewChecked Lift Cycle Hook');
  }

  onSetState(state: 'None' | 'Doing' | 'Finish'): void {
    this.task.state = state;
  }
}
