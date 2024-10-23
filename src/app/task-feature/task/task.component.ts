import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  content = '建立代辦事項元件';

  type: 'Home' | 'Work' | 'Other' = 'Work';

  state: 'None' | 'Doing' | 'Finish' = 'None';

  className = 'work';

  totalCount = 10;
  finishCount = 3;

  onSetState(state: 'None' | 'Doing' | 'Finish'): void {
    this.state = state;
  }
}
