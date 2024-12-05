import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: 'button[appButtonConfirm]',
})
export class ButtonConfirmDirective {
  @Input('appButtonconfirm') message!: string;
  @Output() confirm = new EventEmitter<void>();

  @HostListener('click', ['$event'])
  clickEvent(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (confirm(this.message)) {
      this.confirm.emit();
    }
  }
}
