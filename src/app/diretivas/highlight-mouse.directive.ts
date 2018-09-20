import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
  
  @HostListener('mouseenter') onMouseOver() {
    this.backg = '#9bf442';
    /*this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color', '#9bf442'
    ); */
  } 

  @HostListener('mouseleave') onMouseLeave() {
    this.backg = '#f44256';
    /*this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color', '#f44256'
    ) */
  }

  @HostBinding('style.backgroundColor') backg: string;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) { }

}
