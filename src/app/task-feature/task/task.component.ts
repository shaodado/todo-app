import {
  Attribute,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

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

  @Output() stateChange = new EventEmitter<'None' | 'Doing' | 'Finish'>();

  constructor(@Attribute('id') public id: number) {}
  className = 'work';

  totalCount = 10;
  finishCount = 3;

  onSetState(state: 'None' | 'Doing' | 'Finish'): void {
    this.stateChange.emit(state);
  }
}
