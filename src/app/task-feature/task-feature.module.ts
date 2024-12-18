import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskFeatureRoutingModule } from './task-feature-routing.module';
import { TaskComponent } from './task/task.component';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  declarations: [TaskComponent],
  imports: [CommonModule, UtilsModule, TaskFeatureRoutingModule],
  exports: [TaskComponent],
})
export class TaskFeatureModule {}
