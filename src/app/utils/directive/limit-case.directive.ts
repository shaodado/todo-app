import {
  Directive,
  Host,
  Input,
  Optional,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { LimitDirective } from './limit.directive';

@Directive({
  selector: '[appLimitCase]',
})
export class LimitCaseDirective {
  private hasView = false;

  @Input()
  set appLimitCase(value: string) {
    const condition = value === this.limit.appLimit;
    if (condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<Object>,
    @Optional() @Host() private limit: LimitDirective
  ) {}
}
