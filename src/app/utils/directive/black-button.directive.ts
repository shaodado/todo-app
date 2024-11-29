import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'button[appBlackButton]',
  exportAs: 'blackButton',
})
export class BlackButtonDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  changeColor(color: string) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', color);
  }
  ngOnInit(): void {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'black'
    );
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }
}
