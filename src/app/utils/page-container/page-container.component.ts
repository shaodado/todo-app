import { Component, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.css'
})
export class PageContainerComponent {
  @ContentChildren('button',{descendants: true}) 
  buttonElements!: QueryList<ElementRef>; 
}
