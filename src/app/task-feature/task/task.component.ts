import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  private _id!: number;

  @Input() content!: string;
  @Input() type!: 'Home' | 'Work' | 'Other';
  @Input() state!: 'None' | 'Doing' | 'Finish';

  @Input() set id(id: string) {
    this._id = +id;
  }

  get id(): string {
    return this._id.toString();
  }

  className = 'work';

  totalCount = 10;
  finishCount = 3;

  onSetState(state: 'None' | 'Doing' | 'Finish'): void {
    this.state = state;
  }
}
