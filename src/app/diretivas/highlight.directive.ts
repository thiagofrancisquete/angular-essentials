import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onmouseover() {
    this.backg = this.defaultColor;
  }

  @HostListener('mouseleave') onmouseleave() {
    this.backg = this.highlightColor;
  }

  @HostBinding('style.backgroundColor') backg: string;

  @Input() defaultColor: string = 'lightgreen';
  @Input('highlight') highlightColor: string = 'tomato'

  constructor() { }

  ngOnInit() {
    this.backg = this.defaultColor;
  }

}
