import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
content="建立代辦事項元件";

state:'None'|'Doing'|'Finish'='None';
onSetState(state:'None'|'Doing'|'Finish'){
  this.state=state;
}

totalCount=10;
finishCount=3;
}
