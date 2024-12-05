import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'button[appBlackButton]',
  exportAs: 'blackButton',
})
export class BlackButtonDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'black'
    )z
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }
}
