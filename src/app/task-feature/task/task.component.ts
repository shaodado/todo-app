import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent  implements OnInit {
  @Input({ required: true })
  task!: Task;

  @Output()
  stateChange = new EventEmitter<'None' | 'Doing' | 'Finish'>();

  contentClass!: { [key: string]: boolean };

  startDate?: Date;

  finishDate?: Date;

  ngOnInit(): void {
    this.contentClass = {
      important: this.task.important,
      urgent: this.task.urgent,
    };
  }

  ngDoCheck(): void {
    this.setTaskDate();
  }

  onSetState(state: 'None' | 'Doing' | 'Finish'): void {
    this.stateChange.emit(state);
  }

  setTaskDate(): void {
    switch (this.task.state) {
      case 'None':
        this.startDate = undefined;
        this.finishDate = undefined;
        break;
      case 'Doing':
        this.startDate = new Date();
        this.finishDate = undefined;
        break;
      case 'Finish':
        this.finishDate = new Date();
        break;
    }
  }
}
