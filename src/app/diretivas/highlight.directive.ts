import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onmouseover() {
    this.bckg = this.highlightColor;
  }

  @HostListener('mouseleave') onmouseleave() {
    this.bckg = this.defaultColor;
  }
  
  @HostBinding('style.backgroundColor') bckg: string;

  @Input() defaultColor: string = 'teal'
  @Input() highlightColor: string = 'tomato'
  
  constructor() { }

  ngOnInit() {
    this.bckg = this.defaultColor;
  }  

}
