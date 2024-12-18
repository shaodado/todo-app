import { LimitDirective } from './directive/limit.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageContainerComponent } from './page-container/page-container.component';
import { ButtonConfirmDirective } from './directive/button-confirm.directive.component';
import { BlackButtonDirective } from './directive/black-button.directive';
import { LimitCaseDirective } from './directive/limit-case.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PageContainerComponent,
    ButtonConfirmDirective,
    BlackButtonDirective,
    LimitDirective,
    LimitCaseDirective,
  ],
  exports: [
    PageContainerComponent,
    ButtonConfirmDirective,
    BlackButtonDirective,
    LimitDirective,
    LimitCaseDirective,
  ],
})
export class UtilsModule {}
